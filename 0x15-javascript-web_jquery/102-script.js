const url1 = 'https://hellosalut.stefanbohacek.dev/?lang=';
$(function () {
  $('INPUT#btn_translate').click(function () {
    const inputValue = $('INPUT#language_code').val();

    const url2 = url1 + inputValue;

    $.get(url2, function (data) {
      $('DIV#hello').text(data.hello);
    });
  });
});
