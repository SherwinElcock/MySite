// Toggle completed status
// Use on - as the elements are not on the page yet
$('ul').on("click", "li", (function() {
    // the specific li that was clicked
    // toggle the completed class
    $(this).toggleClass("completed");
}));

// Delete to-do
$("ul").on("click", "span", (function(event){
   // this is going to remove the parent element
    $(this).parent().fadeOut(600, function(){
        // this is the li
        $(this).remove();
    });
   event.stopPropagation();
}));


$("input[type='text']").keypress(function(event){
   // get character code 13 - enter key
    if(event.which === 13){
        // get new todoText from inpu
        var todoText = $(this).val();
        // clear the box
        $(this).val("");
        // create new li and add to list
        // using append
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
