import { API_URL, RES_PER_PAGE, KEY } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';

/**
 * Represents the state of the application.
 * @typedef {Object} State
 * @property {Object} recipe - The currently selected recipe.
 * @property {Object} search - The search state.
 * @property {string} search.query - The search query.
 * @property {Array} search.results - The search results.
 * @property {number} search.page - The current page of search results.
 * @property {number} search.resultsPerPage - The number of search results per page.
 * @property {Array} bookmarks - The bookmarked recipes.
 */

/**
 * The application state.
 * @type {State}
 */
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

/**
 * Creates a recipe object based on the provided data.
 *
 * @param {Object} data - The data object containing recipe information.
 * @returns {Object} - The created recipe object.
 */
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    // this is a REALLY NICE WAY of conditionally adding properties to an object
    // if recipe.key is a falsy value, nothing happens since && short-circuits
    // if recipe.key DOES exist, then the key object is returned and displayed as if the values were on the outside
    ...(recipe.key && { key: recipe.key }),
  };
};

/**
 * Loads a recipe from the API and updates the state with the recipe data.
 * @param {string} id - The ID of the recipe to load.
 * @throws {Error} If there is an error loading the recipe.
 */
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    // temp error handling
    console.error(`${err}`);
    throw err;
  }
};

/**
 * Loads search results based on the provided query.
 *
 * @param {string} query - The search query.
 * @returns {Promise<void>} - A promise that resolves when the search results are loaded.
 * @throws {Error} - If there is an error while loading the search results.
 */
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    console.log(data);
    state.search.results = data.data.recipes.map(element => {
      return {
        id: element.id,
        title: element.title,
        publisher: element.publisher,
        image: element.image_url,
        ...(element.key && { key: element.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(
      `${err} Throwing the error again to reuse it in the controller`
    );
    throw err;
  }
};

/**
 * Retrieves a specific page of search results.
 *
 * @param {number} [page=state.search.page] - The page number to retrieve. Defaults to the current page in the state.
 * @returns {Array} - An array containing the search results for the specified page.
 */
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0;
  const end = page * state.search.resultsPerPage; // 9;

  return state.search.results.slice(start, end);
};

/**
 * Updates the servings of the recipe and adjusts the ingredient quantities accordingly.
 *
 * @param {number} newServings - The new number of servings for the recipe.
 */
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    // newQt = oldQt * newServings / oldServings
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Adds new bookmark
  state.bookmarks.push(recipe);

  // Marks current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

/**
 * Deletes a bookmark from the state and updates the recipe's bookmark status.
 * @param {string} id - The ID of the bookmark to be deleted.
 */
export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Marks current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) {
    // Converts string back to object
    state.bookmarks = JSON.parse(storage);
  }
};
init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

/**
 * Uploads a new recipe to the server.
 *
 * @param {Object} newRecipe - The new recipe object to be uploaded.
 * @returns {Promise} A promise that resolves when the recipe is uploaded successfully.
 * @throws {Error} If the ingredient format is incorrect.
 */
export const uploadRecipe = async function (newRecipe) {
  try {
    // The .map() method is always good to create new arrays built from already pre-existing data
    // console.log(Object.entries(newRecipe));
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        // const ingArr = ing[1].replaceAll(' ', '').split(',');

        if (ingArr.length !== 3)
          throw new Error('Bro, use the right ingredient format!.');

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(
      `${API_URL}?search=${recipe.title}&key=${KEY}`,
      recipe
    );
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
