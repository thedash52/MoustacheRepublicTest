$(document).ready(function () {
    $('.size-selection').click(function () {
        $('.size-selection').removeClass('active-size');

        $(this).addClass('active-size');
        $('#selectedSize').val($(this).data('size'));
        $('#selectSize').val($(this).data('size'));
    });

    $('#addProd').click(function () {
        const size = $('#selectedSize').val();

        if (size) {
            alert("Added To Cart");
        } else {
            alert("Please select size");
        }
    });
});