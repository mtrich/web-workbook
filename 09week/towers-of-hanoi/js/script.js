'use strict';

$(document).ready(function() {

  var $stacks = $('[data-stack]');
  var $blocks = $('[data-block]');
  var $movable = $('[data-block]:last-child');
  $movable.addClass("movable");
  var gameWin = false;

  $blocks.draggable({
    revert: true
  });

  $stacks.droppable({
    accept: ".movable",
    drop: function(event, ui) {
      if (canDrop($(this), ui.draggable)) {
        $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');

        $movable = $('[data-block]:last-child');
        $('[data-block]').removeClass("movable");
        $movable.addClass("movable");
        $blocks.draggable({
          revert: true
        });
        checkWin();
      }
    }
  });

  function canDrop($stack, $block) {
    var $last = $stack.children().last();
    if (parseInt($block.attr("data-block")) < parseInt($last.attr("data-block")) || $stack.children().length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkWin(){
    if ($('[data-stack = "3"]').children().length === 4) {
      $('#announce-game-won').html("You Won!");
      gameWin = true;
    }
  }
});
