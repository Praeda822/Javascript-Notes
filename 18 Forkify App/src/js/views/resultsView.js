import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

/**
 * Represents a view for displaying search results.
 * @extends View
 */
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Go fuck yourself!';
  _message = '';

  /**
   * Generates the markup for displaying search results.
   * @returns {string} The generated markup.
   */
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
