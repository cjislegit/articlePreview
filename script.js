let activeShare = false;

const shareClick = () => {
  if (window.innerWidth < 1000) {
    mobileShareClick();
  } else {
    activeShare = desktopShareClick(activeShare);
  }
};

const activeShareClick = () => {
  document.querySelector('.activeShare').style.display = 'none';
  document.querySelector('.share').style.display = 'grid';
  activeShare = false;
};

const mobileShareClick = () => {
  document.querySelector('.share').style.display = 'none';
  document.querySelector('.activeShare').style.display = 'flex';
  activeShare = true;
};

const desktopShareClick = (activeShare) => {
  if (!activeShare) {
    document.querySelector('.activeShare').style.display = 'flex';
    document.querySelector('.shareIcon').style.backgroundColor =
      'hsl(214, 17%, 51%)';
    document.querySelector('.shareIconArrow').style.fill = '#FFFFFF';
    return true;
  } else {
    document.querySelector('.activeShare').style.display = 'none';
    document.querySelector('.shareIcon').style.backgroundColor =
      'hsl(210, 46%, 95%)';
    document.querySelector('.shareIconArrow').style.fill = '#6d7f97';
    return false;
  }
};

const windoChange = () => {
  if (window.innerWidth < 1000 && activeShare) {
    document.querySelector('.share').style.display = 'none';
  } else if (window.innerWidth > 1000) {
    document.querySelector('.share').style.display = 'grid';
  }
};

document.querySelector('.shareIcon').addEventListener('click', shareClick);

document
  .querySelector('.activeShareIcon')
  .addEventListener('click', activeShareClick);

window.addEventListener('resize', windoChange);
