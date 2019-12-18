$(function () {
    $('.nav__accordionBtn,.nav__tap-area,.nav__linkList').click(function () {
    //  $(this).next().animate({ width: 'toggle' }, 'slow');
      $('.nav__accordionBtn') .toggleClass('click');
      $('.nav__linkList').animate({ height: 'toggle' }, 'fast');
      // $('.nav__tap-area').animate({ width: 'toggle' }, 'slow');
      

    });
  });