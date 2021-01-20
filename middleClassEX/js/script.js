$(function () {
    $('#js-hamburger').click(function () {
        // $('body').toggleClass('is-drawerActive', 500)

        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', true)
            $('#js-global-menu').css('visibility', 'visible')
            $('#js-global-menu').attr('area-hidden', 'false')
        } else {
            $(this).attr('aria-expanded', false)
            $('#js-global-menu').css('visibility', 'hidden')
            $('#js-global-menu').attr('area-hidden', 'true')
        }
    })
    //背景の黒ボックスクリックでもドロワーが消えるようにする
    $('#js-drawer-background').click(function () {
        // $('body').removeClass('is-drawerActive', 500)

        //are-expandedはtrueの想定なのでif文なし
        //ハンバーガーメニュー元に戻す
        $('#js-hamburger').attr('aria-expanded', false)
        //ドロワー消す
        $('#js-global-menu').css('visibility', 'hidden')
        $('#js-global-menu').attr('area-hidden', 'true')

    })
});