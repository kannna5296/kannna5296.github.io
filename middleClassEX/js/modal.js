$(function () {
    //is-showクラスのつけ外しだけでモーダル表示非表示できるようにしています
    //アニメーションはcss側に記載しています
    $('#openModal').on('click', function () {
        $('#modalArea').toggleClass('is-show');
    });
    $('#closeModal').on('click', function () {
        $('#modalArea').toggleClass('is-show');
    });
    $('#modalBg').on('click', function () {
        $('#modalArea').toggleClass('is-show');
    });
});