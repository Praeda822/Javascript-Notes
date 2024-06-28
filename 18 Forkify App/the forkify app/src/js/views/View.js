import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // This method converts my HTML string (newMarkup) to a new DOM object, like a virtual DOM (what React does I think..) and I can manipulate this DOM as if it was the real one
    // In reality, though, I want to do a comparison check between my new virtual DOM and the original real DOM
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Convert variables to arrays
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // Comparison using .isEqualNode()
    newElements.forEach((newEl, index) => {
      const curEl = curElements[index];

      // Updates only changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }
      // Updates only changed ATTRIBUTES
      // Fixed the bug here, I was missing the Array.from() method to convert newEl.attributes to an array
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  renderSpinner() {
    const markup = `
              <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>
              `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

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
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

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
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
