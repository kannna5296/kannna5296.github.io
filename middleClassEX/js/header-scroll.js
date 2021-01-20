$(function () {
    var headNav = $("header");
    var h = $(window).height();
    //scrollだけだと読み込み時困るのでloadも追加
    $(window).on('load scroll', function () {
        //ちょいちょいスクロールしたらヘッダ表示
        if ($(this).scrollTop() > 0) {
            //headerの高さ分上に設定(animation用)
            headNav.css({ "top": '-70px' });
            headNav.css({ "display": 'block' });
            //クラスfixedを付与
            headNav.addClass('is-fixed');
            //位置を0に設定し、アニメーションのスピードを指定
            headNav.animate({ "top": 0 }, 600);
        }
        else {
            headNav.removeClass('is-fixed');
            headNav.css({ "display": 'none' });
        }
    });
});