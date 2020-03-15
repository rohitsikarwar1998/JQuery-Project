$("ul").on("click", "li", function () {

    //check whether the color is gray of black

    /*if ($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }*/

    //we can do this whole thing in one line 

    $(this).toggleClass("completed");
});


//click on x to remove li items of todo list

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fas").click(function(){
    $("input").fadeToggle(500);
});

