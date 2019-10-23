let Expand = (function() {
  let tile = $('.strips__strip');
  let tileLink = $('.strips__strip > .strip__content');
  let tileText = tileLink.find('.strip__inner-text');
  let stripClose = $('.strip__close');
  
  let expanded  = false;

  let open = function() {
      
    let tile = $(this).parent();

      if (!expanded) {
        tile.addClass('strips__strip--expanded');
        // add delay to inner text
        tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.addClass('strip__close--show');
        stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
        expanded = true;
      } else {
        tile.removeClass('strips__strip--expanded');
        // remove delay from inner text
        tileText.css('transition', 'all 0.2s 0.4s cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.removeClass('strip__close--show');
        stripClose.css('transition', 'all 0.6s 1s cubic-bezier(0.23, 1, 0.32, 1)')
        expanded = false;
      }
    };
    let bindActions = function() {
      tileLink.on('click', open);
    };

    let init = function() {
      bindActions();
    };

    return {
      init: init
    };

  }());

Expand.init();