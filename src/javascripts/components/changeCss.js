const largeTextCheckBox = () => {
  if (document.getElementById('large-text').checked === true) {
    document.getElementById('mainBody').classList.add('lrgTxt');
  } else {
    document.getElementById('mainBody').classList.remove('lrgTxt');
  }
};

const largeTextChecked = () => {
  $('#large-text').click(largeTextCheckBox);
};

export default { largeTextChecked };
