$(function(){

    const NUMJOCKER = 6;


    var $panes = $('.pane');
    var ids = new Array();
    var randids = new Array();
    for(var i = 0; i<40; i++){
        var $pane = $panes[i]
        ids[i] = parseInt($pane.id);
    }

    for(var i = 0; i<NUMJOCKER;i++){
        randids[i] = ids[Math.floor(Math.random()*ids.length)];
    }


    console.log(randids);


    $('.dot').click(function(){
        $(this).addClass('opened');
        var id = $(this).parents('.row').data('id');
        $('.pane#' + id).addClass('open');

    });

    $('.close').click(function(){
        $(this).parents('.pane').hide();
        console.log(randids.indexOf(parseInt($(this).parents('.pane').attr('id'))))
        if(randids.indexOf(parseInt($(this).parents('.pane').attr('id'))) >= 0){
            $('.joker').show();
        }
    });

        $('.joker .close').click(function(){
        $(this).parents('.joker').hide();
    });

    $('.show').click(function(){
        $(this).addClass('open');
    });

    $('.addpoints').click(function(){
        var points = $(this).siblings('p').data('points');
        var add = $(this).data('points');
        console.log(points);
        console.log(add);
        $(this).siblings('p').data('points', points + add).html(points + add);
    });
});
