$(document).ready(function () {
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('.count').val(parseInt($('.count').val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == 0) {
            $('.count').val(1);
        }
    });
    setInterval(function () {
        var min = 225;
        var max = 299;
        $('#persons-count').html(Math.ceil(Math.random() * (max - min) + min));
    }, 2000);
});


