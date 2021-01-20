$(document).ready(function() {
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-orange',
    });
});
$("#categories").change(function() {
    var cate = $("#categories").val();

    if (cate == "2") {
        $("#cars-options").show();
    } else {
        $("#cars-options").hide();
    }
});