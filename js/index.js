var self = this;
var aCanvas = document.getElementById("a");

var myurl = "https://api.spotify.com/v1/albums/0yCqicy5tGkPiB6gUZCRy4";
console.log(myurl);
$.ajax({
  url: myurl,
  dataType: "json",
  success: function(data) {
    $('h1').html(data['name']);
  }
});

var scrollPastCantDeny = false;
var scrollPastLonelyTown = false;

$(window).scroll(function() {
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
  
  var headerHeight = $('#header').height();

  $('#one').height = windowWidth;
  //$('#one').width = windowWidth;

  /*  $('#image').height = windowWidth;
    $('#image').width = windowWidth;*/

  var containerHeight = $('#one').height();

  if (windowScrollTop > 2) {

    /*    var url = "https://api.spotify.com/v1/albums/0yCqicy5tGkPiB6gUZCRy4";
            $.getJSON(url, function(data) {
                console.log(data);
                $('h1').html(data['name']);
            })*/

    $(".menubar").animate({
      height: "10%"
    }, 1000);

  }
  if (windowScrollTop > headerHeight + containerHeight && windowScrollTop < headerHeight + containerHeight * 2) {
    if (!scrollPastCantDeny) {
      $(".menubar").html('<iframe src="https://embed.spotify.com/?uri=spotify:track:2ylbo0xbhTmIA7WeBIVZvg" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>');
      
     

      scrollPastCantDeny = true;
      scrollPastLonelyTown = false;
    }
  } else if (windowScrollTop > headerHeight + containerHeight * 2) {
    if (!scrollPastLonelyTown) {
      $(".menubar").html('<iframe src="https://embed.spotify.com/?uri=spotify:track:0piKlYZPx2fGy88YnzoINE" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>');
      scrollPastLonelyTown = true;
      scrollPastCantDeny = false;
      
      $('.songTitle').remove();
    }
  } else {
    scrollPastCantDeny = false;
    scrollPastLonelyTown = false;
    $(".menubar").html("");
  }

});