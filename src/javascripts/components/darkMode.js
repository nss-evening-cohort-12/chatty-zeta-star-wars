/* const activateDarkMode = () => {
  "import '../styles/darkMode.scss'";
};

const activateLightMode = () => {
  "import '../styles/main.scss'";
}; */

const darkModeCheckBox = () => {
  if (document.getElementById('darkTheme').checked === true) {
    document.getElementById('viewMode').href = 'darkMode.css';
  } else {
    document.getElementById('viewMode').href = 'darkMode.css';
  }
};

const darkModeChecked = () => {
  $('#darkTheme').click(darkModeCheckBox);
};

export default { darkModeChecked, darkModeCheckBox };
