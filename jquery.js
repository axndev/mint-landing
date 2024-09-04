$(function(){
    $('.branding-btn').click(function(){
        $(this).addClass('selected');
        $('.illustration-btn,.web-btn, .all-btn').removeClass('selected');
        $('.non-active, .active').hide();
        $('.branding').css({"padding":"50px 100px","display":"flex"})
    });
    $('.illustration-btn').click(function(){
        $(this).addClass('selected');
        $('.web-btn,.branding-btn').removeClass('selected');
        $('.non-active, .active').hide();
        $('.illustration').css({
            "padding":"50px 100px",
            "display":"flex",
            "grid-row":" span 2 / span 2",
            "grid-column-start": "0",
            "grid-row-start": "0"
        })
        $('.div6').css({
            "grid-column-start": "2",
        });

        $('.active').addClass('non-active');
    });
    $('.web-btn').click(function(){
        $(this).addClass('selected');
        $('.illustration-btn,.branding-btn').removeClass('selected');
        $('.non-active, .active').hide();
        $('.web').css({
            "padding":"50px 100px",
            "display":"flex",
            "grid-row":" span 2 / span 2",
            "grid-column-start": "0",
            "grid-row-start": "0"
        })
    });
    $('.opn-menu').click(function(){
        $(this).hide();
        $('.cls-menu').show();
        $('.navBar').css({
            "display":"flex",
            "opacity":"1",
        });
    });
    $('.cls-menu').click(function(){
        $(this).hide();
        $('.opn-menu').show();
        $('.navBar').hide();
    });
});
