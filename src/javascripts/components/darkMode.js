const activateDarkMode = () => {
  '../styles/darkMode.scss';
};

const activateLightMode = () => {
  '../styles/main.scss';
};

const darkModeCheckBox = () => {
  if (document.getElementById('darkTheme').checked === true) {
    activateDarkMode();
  } else {
    activateLightMode();
  }
};

export default { darkModeCheckBox };
