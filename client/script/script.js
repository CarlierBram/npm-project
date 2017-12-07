//dit zorgt ervoor dat mijn header schermvullend is. 
    $("body").css("height", $(window).height());
    $("body").css("width", $(window).width());
console.log($(window).height());
    $(window).resize(function () {
        $("body").css("height", $(window).height());
        $("body").css("width", $(window).width());
    });