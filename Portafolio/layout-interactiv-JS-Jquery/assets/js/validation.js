$(document).ready(function() {
    $("form input[name='date']").datepicker();
    
    $('#btnSubmit').on('click', function() {
        console.log($('form').valid());
    });
});
