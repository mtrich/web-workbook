'use strict';

$(document).ready(function() {
  var move = 'X';
  $('[data-cell]').on('click', function(){
    if($(this).text() === ''){
    $(this).text(move);
    win();
    if (move === 'X') {
      move = 'O';
    }else {
      move = 'X';
    }
    }
 });

  function win(){
    if
      ($('[data-cell = "0"]').text() === move &&
       $('[data-cell = "3"]').text() === move &&
       $('[data-cell = "6"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
     } else if
      ($('[data-cell = "1"]').text() === move &&
       $('[data-cell = "4"]').text() === move &&
       $('[data-cell = "7"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
    } else if
      ($('[data-cell = "2"]').text() === move &&
       $('[data-cell = "5"]').text() === move &&
       $('[data-cell = "8"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
    } else if
      ($('[data-cell = "0"]').text() === move &&
       $('[data-cell = "1"]').text() === move &&
       $('[data-cell = "2"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
    } else if
      ($('[data-cell = "0"]').text() === move &&
       $('[data-cell = "1"]').text() === move &&
       $('[data-cell = "2"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
    } else if
      ($('[data-cell = "3"]').text() === move &&
       $('[data-cell = "4"]').text() === move &&
       $('[data-cell = "5"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
    } else if
      ($('[data-cell = "6"]').text() === move &&
       $('[data-cell = "7"]').text() === move &&
       $('[data-cell = "8"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
    } else if
      ($('[data-cell = "2"]').text() === move &&
       $('[data-cell = "4"]').text() === move &&
       $('[data-cell = "6"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
    } else if
      ($('[data-cell = "0"]').text() === move &&
       $('[data-cell = "4"]').text() === move &&
       $('[data-cell = "8"]').text() === move){
       $('#announce-winner').text(`${move} wins!`);
    } else if
      ($('[data-cell = "0"]').text() !== '' &&
       $('[data-cell = "1"]').text() !== '' &&
       $('[data-cell = "2"]').text() !== '' &&
       $('[data-cell = "3"]').text() !== '' &&
       $('[data-cell = "4"]').text() !== '' &&
       $('[data-cell = "5"]').text() !== '' &&
       $('[data-cell = "6"]').text() !== '' &&
       $('[data-cell = "7"]').text() !== '' &&
       $('[data-cell = "8"]').text() !== ''){
       $('#announce-winner').text(`It's a Tie!`);
      };

  }

  $('#clear').click(function(){
    $('[data-cell]').empty();
    move = "X";
    $('#announce-winner').empty();
  });
})
