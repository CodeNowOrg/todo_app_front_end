$(document).ready(function() {
    $("input[type=checkbox]").click(function(){
       $(this).closest("li").toggleClass("completed-todo")
    })
})