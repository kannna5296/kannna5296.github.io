$(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
        if (
            $('#form input[type="text"]').val() !== "" &&
            $('#form input[type="email"]').val() !== "" &&
            // $('#form input[type="checkbox"]').val() !== "" &&
            $('#form #privacycheck').prop('checked') === true
        ) {
            $submitBtn.prop('disabled', false);

        } else {
            $submitBtn.prop('disabled', true);
        }
    });

});