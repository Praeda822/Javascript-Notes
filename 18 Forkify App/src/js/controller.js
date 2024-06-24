import * as model from './model.js';
import recipeView from './views/recipeView.js';
// Pollyfilling Everything else
// import 'core-js/stable';
// Polyfilling Async/Await
// import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    // Guard-clause to protect from shitty errors
    if (!id) return;
    recipeView.renderSpinner();

    // 1. Loading recipe
    // Will return a promise - HANDLE IT
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
