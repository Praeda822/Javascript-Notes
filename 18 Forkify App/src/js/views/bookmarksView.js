import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

/**
 * Represents the view for displaying bookmarks.
 * @class
 * @extends View
 */
class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet, big fella, go bookmark some of em';
  _message = '';

  /**
   * Adds an event listener to render the bookmarks view when the window loads.
   * @param {Function} handler - The event handler function.
   */
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  /**
   * Generates the markup for displaying the bookmarks.
   * @returns {string} The generated HTML markup.
   * @private
   */
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
