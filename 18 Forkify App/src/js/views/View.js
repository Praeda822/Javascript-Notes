import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const newMarkup = this._generateMarkup();

    // This method converts my HTML string (newMarkup) to a yuuuge new DOM object, like a virtual DOM (what React does I think..) and I can fuck with this DOM as if it was the real one
    // In reality, though, I want to do a comparison check between my new fake DOM and the OG REAL DOM
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Convert variables to arrays
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // Comparison using .isEqualNode()
    newElements.forEach((newEl, index) => {
      const curEl = curElements[index];
      console.log(curEl, newEl.isEqualNode(curEl));
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
