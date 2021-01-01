//FAQのアコーディオン
$(function () {
    $("#acMenu .question").on("click", function () {
        $(this).next().slideToggle();
    });
});
