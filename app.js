$(document).ready(function () {
    $('#btnSubmit').click(function () {
        alert('Help Me!');
    });

    $('#btnSubmit2').click(function () {
        var str = $('#textarea').val();
        alert(str);
        if ($('#textarea') === 0) {
            $('#btnSubmit2').disabled = true;
        };

    });

    // $('#btnSubmit2').click(function () {
    //     $('#btnSubmit2').disabled = true;
    // });

});