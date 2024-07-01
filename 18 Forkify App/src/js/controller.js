import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

///////////////////////////////////////
// NO DOM ELEMENTS IN HERE!!
///////////////////////////////////////

/**
 * Controls the rendering of a recipe.
 * @async
 */
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // Guard-clause to protect from shitty errors
    if (!id) return;

    recipeView.renderSpinner();

    // Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    //  Update the bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 1. Loading recipe
    // Will return a promise - HANDLE IT
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);

    // TESTING
    // controlServings();
  } catch (err) {
    recipeView.renderError();
  }
};

/**
 * Controls the search results.
 * @async
 */
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1. Get Search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2. Load search results
    await model.loadSearchResults(query);

    // 3. Render results
    resultsView.render(model.getSearchResultsPage());

    // 4. Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

/**
 * Controls the pagination.
 * @param {number} goToPage - The page number to go to.
 */
const controlPagination = function (goToPage) {
  console.log('paggie controller');
  // Update my current page in the state
  model.state.search.page = goToPage;
  // Render the results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // Render new pagination buttons
  paginationView.render(model.state.search);
};

/**
 * Controls the servings of a recipe.
 * @param {number} newServings - The new number of servings.
 */
const controlServings = function (newServings) {
  // Update recipe servings (in state)
  model.updateServings(newServings);
  // Update the recipe view
  // recipeView.render(model.state.recipe);

  // Update will only update text and attributes in DOM, so no more flickering!
  recipeView.update(model.state.recipe);
};

/**
 * Controls adding/removing bookmarks.
 */
const controlAddBookmark = function () {
  // Add/removes bookmarks
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  // Updates the recipe view container
  recipeView.render(model.state.recipe);
  // Renders the bookmarks in the bookmark container
  bookmarksView.render(model.state.bookmarks);
};

/**
 * Controls rendering of bookmarks.
 */
const controlBookmarks = function () {
  // Load first, then render & view
  bookmarksView.render(model.state.bookmarks);
};

/**
 * Controls adding a new recipe.
 * @async
 * @param {Object} newRecipe - The new recipe data.
 */
/**
 * Handles the addition of a new recipe.
 *
 * @param {Object} newRecipe - The new recipe to be added.
 * @returns {Promise<void>} - A promise that resolves when the recipe is added successfully.
 * @throws {Error} - If there is an error during the addition of the recipe.
 */
const controlAddRecipe = async function (newRecipe) {
  try {
    // Show the spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Display success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // pushState takes THREE arguments:
    // .pushState(state, title, URL)
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
      location.reload();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

/**
 * Initializes the application.
 */
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
