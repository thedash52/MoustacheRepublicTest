let cartNum = 0;

$(document).ready(function () {
    $('#prodSmall').hide();
    $('#prodMedium').hide();
    $('#prodLarge').hide();
    
    $('#dropdown-container').hover(function() {
        $('.dropdown-toggle').dropdown('toggle');
    });

    $('#dropdown-container').on('show.bs.dropdown', function() {
        $(this).addClass('active-cart');
    });

    $('#dropdown-container').on('hide.bs.dropdown', function() {
        $(this).removeClass('active-cart');
    });

    $('.size-selection').click(function() {
        $('.size-selection').removeClass('active-size');

        $(this).addClass('active-size');
        $('#selectedSize').val($(this).data('size'));
        $('#selectSize').text($(this).data('size'));
    });

    $('#addProd').click(function() {
        const size = $('#selectedSize').val();

        if (size) {
            cartNum++;
            $('#cartNum').text(cartNum);
            $('#emptyCart').hide();

            switch (size) {
                case 's':
                    const smlQty = Number($('#smallQty').val());

                    $('#smallQty').val(smlQty + 1);

                    $('#smlQty').text($('#smallQty').val());
                    $('#prodSmall').show();
                    break;

                case 'm':
                    const medQty = Number($('#mediumQty').val());

                    $('#mediumQty').val(medQty + 1);

                    $('#medQty').text($('#mediumQty').val());
                    $('#prodMedium').show();
                    break;

                case 'l':
                    const lgeQty = Number($('#largeQty').val());

                    $('#largeQty').val(lgeQty + 1);

                    $('#lgeQty').text($('#largeQty').val());
                    $('#prodLarge').show();
                    break;
            }
        } else {
            alert("Please select size");
        }
    });
});