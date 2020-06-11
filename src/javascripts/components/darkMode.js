/* const activateDarkMode = () => {
  "import '../styles/darkMode.scss'";
};

const activateLightMode = () => {
  "import '../styles/main.scss'";
}; */

const darkModeCheckBox = () => {
  if (document.getElementById('darkTheme').checked === true) {
    /* activateDarkMode(); */
    console.error('darkmode')
  } else {
    /* activateLightMode(); */
    console.error('lightmode')
  }
};

export default { darkModeCheckBox };
