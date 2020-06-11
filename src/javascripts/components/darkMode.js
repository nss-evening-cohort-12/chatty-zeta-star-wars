/* const activateDarkMode = () => {
  "import '../styles/darkMode.scss'";
};

const activateLightMode = () => {
  "import '../styles/main.scss'";
}; */

const darkModeCheckBox = () => {
  if (document.getElementById('darkTheme').checked === true) {
    document.getElementById('mainBody').classList.add('darkMode');
  } else {
    document.getElementById('mainBody').classList.remove('darkMode');
  }
};

const darkModeChecked = () => {
  $('#darkTheme').click(darkModeCheckBox);
};

export default { darkModeChecked, darkModeCheckBox };
