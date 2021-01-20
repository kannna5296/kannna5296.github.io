// Googleフォーム送信時遷移しない。
$(document).ready(function () {
    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfV8IKmmZfOzYge60cJk_2wLd8YEmKoy9QI6SsN-vmjIJLB4Q/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".end-message").slideDown();
                    $(".submit-btn").fadeOut();
                },
                200: function () {
                    $(".false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });

});