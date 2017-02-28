const setPageHeight = () => {
  let mainContainer = document.querySelector('.article-fluid');
  let pageContent = document.querySelector('.article-main');
  mainContainer.style.minHeight = document.documentElement.clientHeight + 'px';
  pageContent.style.minHeight = mainContainer.offsetHeight - 80 + 'px';
};

export {
  setPageHeight
};