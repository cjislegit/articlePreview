let activeShare = false;

const shareClick = () => {
  if (window.innerWidth < 1300) {
    mobileShareClick();
  } else {
    activeShare = desktopShareClick(activeShare);
  }
};

const activeShareClick = () => {
  document.querySelector('.activeShare').style.display = 'none';
  document.querySelector('.share').style.display = 'grid';
};

const mobileShareClick = () => {
  document.querySelector('.share').style.display = 'none';
  document.querySelector('.activeShare').style.display = 'flex';
};

const desktopShareClick = (activeShare) => {
  if (!activeShare) {
    document.querySelector('.activeShare').style.display = 'flex';
    return true;
  } else {
    document.querySelector('.activeShare').style.display = 'none';
    return false;
  }
};

document.querySelector('.shareIcon').addEventListener('click', shareClick);
document
  .querySelector('.activeShareIcon')
  .addEventListener('click', activeShareClick);
