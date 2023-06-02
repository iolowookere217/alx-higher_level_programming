const url1 = 'https://hellosalut.stefanbohacek.dev/?lang=';

$(function () {
  $('INPUT#language_code').keypress(function (event) {
    if (event.which === 13) {
      const inputValue = $(this).val();
      const url2 = url1 + inputValue;

      $.get(url2, function (data) {
        $('DIV#hello').text(data.hello);
      });
    }
  });

  $('INPUT#btn_translate').click(function () {
    const inputValue = $(this).val();
    const url2 = url1 + inputValue;

    $.get(url2, function (data) {
      $('DIV#hello').text(data.hello);
    });
  });
});
