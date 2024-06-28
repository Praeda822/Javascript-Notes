import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      // Looking UP for parents
      const btn = e.target.closest('.btn--inline');
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Single page, no paggie needed
    if (numPages <= 1) return '';

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._makeBtn('next', curPage + 1);
    }
    // Last Page
    if (curPage === numPages) {
      return this._makeBtn('prev', curPage - 1);
    }
    // Other page
    if (curPage < numPages) {
      return `
      ${this._makeBtn('prev', curPage - 1)}${this._makeBtn('next', curPage + 1)}

      `;
    }
  }
  // Buttonmaker
  _makeBtn(direction, page) {
    return `
      <button data-goto="${page}"class="btn--inline pagination__btn--${direction}">
        ${
          direction === 'prev'
            ? `
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${page}</span>
        `
            : `
          <span>Page ${page}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        `
        }
      </button>
    `;
  }
}

export default new PaginationView();
