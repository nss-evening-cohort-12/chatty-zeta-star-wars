const addMessage = () => {
  $('#chat-area').keypress(submitMessage = (msg) => {
    $('textarea#chat-area').submit();
  })
}
