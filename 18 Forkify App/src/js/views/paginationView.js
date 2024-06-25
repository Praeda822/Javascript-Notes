import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  // Buttonmaker
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
            <button class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
    }
    // Last Page
    if (curPage === numPages) {
      return `
            <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
            
        `;
    }
    // Other page
    if (curPage < numPages) {
    }
    // Page 1, and there are NO other pages
    return '';
  }

  _generateBtnMarkup(direction, page) {
    return `
      <button class="btn--inline pagination__btn--${direction}">
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
