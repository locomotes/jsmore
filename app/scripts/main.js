
$('#allo').click(function(){
	console.log('change color');

	$(this).css('color', 'red');
});

$('#c1').click(function(){
	console.log('Allo opacity');

$('#c2').addClass('opacity');
});

$('#c4').click(function(){
	console.log('slides up');

	$('#c3').slideUp('slow');
});

$('#c5').click(function(){
	console.log('slides down');

	$('#c6').slideDown('slow');
});

$(document).keydown(function(){
	console.log('remove');

	$('h1').remove();
});

// $(document).keyup(function(){
// 	console.log('another remove');

// 	$('hero-unit').remove();
// });

// $('#c7').on( "click", function(){
// 	console.log('another remove');

// 	$('hero-unit').remove();
// });

$("#c7").on("click", function() {
  alert($(this).text("hello world"));
});

$('#c1').click(function(){
	console.log('Allo opacity');

$('#c2').addClass('opacity');
});

$('#one').one("click", function(){
	console.log('add css');

$('#two').add()
	.css("background-color", "red");
});

// $('#c2').hover(
// 	.css("background-color", "red");
// });

$(".circa").hover(
  function() {
    $(this).addClass("circas");
  }, function() {
    $(this).removeClass("circas");
  }
);

// $(".circa")
//   .filter( ":odd" )
//     .hide()
//   .end()
//   .filter( ":even" )
//     .hover(function() {
//       $( this )
//         .toggleClass( "active" )
//         .next()
//           .stop( true, true )
//           .slideToggle();
//     });










