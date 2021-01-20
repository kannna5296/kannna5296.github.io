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

$(function () {
    $('.js-tab-trigger').on('click', function () {
        //まずは全triggerからclass削除
        $('.js-tab-trigger').removeClass('is-active');
        //次に全targetからclass削除
        $('.js-tab-target').removeClass('is-active');
        //次にクリックした要素にis-active
        $(this).addClass('is-active');
        //data属性を取得する
        let id = $(this).data("id");
        //data属性値=idが等しいものにclass付与
        $('#' + id).addClass('is-active')
    });
});