url = 'https://fourtonfish.com/hellosalut/?lang=fr';
$.get(url, function (data, status) {
  $('DIV#hello').text(data.hello);
});
