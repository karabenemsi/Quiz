$(function(){
    $('.dot').click(function(){
        $(this).addClass('opened');
        var id = $(this).parents('.row').data('id');
        $('.pane#' + id).show();
    });

    $('.close').click(function(){
        $(this).parents('.pane').hide();
    });

    $('.show').click(function(){
        $(this).children('.answer').show();
    });
});
