const largeTextCheckBox = () => {
  if (document.getElementById('large-text').checked === true) {
    $('.message').addClass('lrgTxt');
  } else {
    $('.message').removeClass('lrgTxt');
  }
};

const largeTextChecked = () => {
  $('#large-text').click(largeTextCheckBox);
};

export default { largeTextChecked };
