$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: '.chips'
  })
  .setClassToggle('.chips', 'fade-in')
  .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.collectImage'
  })
  .setClassToggle('.collectImage', 'fade-in')
  .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.aboutImage'
  })
  .setClassToggle('.aboutImage', 'fade-in')
  .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '.navImage'
  })
  .setClassToggle('.navImage', 'fade-in')
  .addTo(controller);

  var scene5 = new ScrollMagic.Scene({
    triggerElement: '.foodEmoji'
  })
  .setClassToggle('.foodEmoji', 'fade-in')
  .addTo(controller);
});
