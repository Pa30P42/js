const createPaginationPage = (pageNumber) => {
  return `
    <li class="paginationPageItem" data-page=${pageNumber}>${pageNumber}</li>`;
};
export default createPaginationPage;
