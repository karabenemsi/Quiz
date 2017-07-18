$(function(){
    $('.row').click(function(){
        $(this).addClass('opened');
        var id = $(this).data('id');
        $('.pane#' + id).show();
    });

    $('.close').click(function(){
        $(this).parents('.pane').hide();
    });

    $('.show').click(function(){
        $(this).children('.answer').show();
    });
});