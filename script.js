const shareClick = () => {
  document.querySelector('.share').style.display = 'none';
  document.querySelector('.activeShare').style.display = 'flex';
};

const activeShareClick = () => {
  document.querySelector('.activeShare').style.display = 'none';
  document.querySelector('.share').style.display = 'grid';
};

document.querySelector('.shareIcon').addEventListener('click', shareClick);
document
  .querySelector('.activeShareIcon')
  .addEventListener('click', activeShareClick);
