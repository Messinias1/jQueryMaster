$(document).ready(function() {
    $('ul.parent > li').hover(function() {
        $(this).find('ul.child').show(400);
    }, function() {
        $(this).find('ul.child').hide(200);
    });
});

$(document).ready(function() {
    $('h1').click(function() {
        $('#content').slideToggle(1500);
    });
});

$(document).ready(function() {
    $('#content').click(function() {
        $('#content1').slideToggle(900);
    });
});

$(document).ready(function() {
    $('#content1').click(function() {
        $('#locList > li').slideToggle(500);
    });
});