(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

  }); // end of document ready
})(jQuery); // end of jQuery name space

