// (function($){
//   $(function(){

//     $('.sidenav').sidenav();
//     $('.parallax').parallax();
//     var modals = document.querySelectorAll('.modal');
//     M.Modal.init(modals);

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {

  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  let navs = document.querySelectorAll('.sidenav');
  M.Sidenav.init(navs);

  let parallaxs = document.querySelectorAll('.parallax');
  M.Parallax.init(parallaxs);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);


});