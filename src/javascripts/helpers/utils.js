const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
  selectedDiv.scrollTop = selectedDiv.scrollHeight;
};

export default { printToDom };
