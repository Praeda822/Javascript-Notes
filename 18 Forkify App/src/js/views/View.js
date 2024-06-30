import icons from 'url:../../img/icons.svg';

/**
 * Represents a View.
 * @class
 */
export default class View {
  _data;

  /**
   * Renders received object to the DOM.
   * @param {Object | Object[]} data - The rendered data (e.g. recipe).
   * @param {boolean} [render=true] - If false, create markup string instead of rendering to the DOM.
   * @returns {undefined | string} - A markup string is returned if render=false.
   * @this {Object} - View instance.
   * @todo Finish implementation.
   */
  render(data, render = true) {
    // Check if data is empty or an empty array
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();

    // If render is false, return the markup string
    if (!render) return markup;

    // Clear the parent element and insert the markup into it
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Clears the parent element.
   * @private
   */
  _clear() {
    // Clear the inner HTML of the parent element
    this._parentElement.innerHTML = '';
  }

  /**
   * Updates the view with new data.
   * @param {Object | Object[]} data - The new data.
   */
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // Create a new DOM fragment from the new markup
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // Update the existing elements with the new elements
    newElements.forEach((newEl, index) => {
      const curEl = curElements[index];

      // Update the text content of the current element if it's different from the new element
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Update the attributes of the current element to match the new element
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  /**
   * Renders a spinner on the screen.
   */
  renderSpinner() {
    const markup = `
              <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>
              `;
    // Clear the parent element and insert the spinner markup into it
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Renders an error message.
   * @param {string} [message=this._errorMessage] - The error message.
   */
  renderError(message = this._errorMessage) {
    const markup = `
         <div class="error">
           <div>
             <svg>
               <use href="${icons}#icon-alert-triangle"></use>
             </svg>
            </div>
            <p>${message}</p>
         </div>
        `;
    // Clear the parent element and insert the error message markup into it
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Renders a success message.
   * @param {string} [message=this._message] - The success message.
   */
  renderMessage(message = this._message) {
    const markup = `
         <div class="message">
           <div>
             <svg>
               <use href="src/img/${icons}#icon-smile"></use>
             </svg>
            </div>
            <p>${message}</p>
         </div>
        `;
    // Clear the parent element and insert the success message markup into it
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
