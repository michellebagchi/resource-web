$(document).ready(function () {
    $(".container").click(function (e) { 
        e.preventDefault();

        $(".fade").animate({
            opacity: 1,
        }, 500)
        
    });
});




// $("document").ready(function () {
//     $(".container").click(function () {
//       $(".thought,.thought2,.thought3,.thought4").fadeToggle(200);
//     });
//   });
// document.getElementById('show-links').addEventListener('click', function() {
//     var links = document.getElementsByClassName('hidden-link');
//     for (var i = 0; i < links.length; i++) {
//       links[i].style.display = 'outline-block';
//     }
// });
