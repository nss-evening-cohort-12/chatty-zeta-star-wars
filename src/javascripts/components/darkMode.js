/* const activateDarkMode = () => {
  "import '../styles/darkMode.scss'";
};

const activateLightMode = () => {
  "import '../styles/main.scss'";
}; */

const darkModeCheckBox = () => {
  if (document.getElementById('darkTheme').checked === true) {
    document.getElementById('viewMode').href = 'darkMode.css';
    console.error('darkmode');
  } else {
    document.getElementById('viewMode').href = 'main.css';
    console.error('lightmode');
  }
};

const darkModeChecked = () => {
  $('#darkTheme').click(darkModeCheckBox);
};

export default { darkModeChecked, darkModeCheckBox };
