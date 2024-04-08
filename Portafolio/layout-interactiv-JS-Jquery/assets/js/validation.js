$(document).ready(function() {
    $('form').validate();
    $("form input[name='date']").datepicker();
    $('#btnSubmit').on('click', function() {
        console.log($('form').valid());
    });
});
