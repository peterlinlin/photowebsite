

function loadTest(){
  var folder = "./photos/gallery/"
  var image = "img101.jpg"
  for(var i = 0; i < 3; i++){
    $( "<div class='col-sm-4'>" +
    "<figure class='photo-frame'>" +
    "<img src=' ../" +
    folder +
    image +
    "' class='gallery'" +
    "/>" +
    "</figure>" +
    "</div>" ).appendTo("#gallery");
  }};

  /*
  var folder = "images/";

  $.ajax({
  url : folder,
  success: function (data) {
  $(data).find("a").attr("href", function (i, val) {
  if( val.match(/\.(jpe?g|png|gif)$/) ) {
  $("body").append( "<img src='"+ folder + val +"'>" );
  }
  });
  }
  });

  */

  function loadGallery(){
    var folder = "./photos/gallery/";
    $.ajax({
      url : folder,
      success: function (data) {
        $(data).find("a:contains(.jpg)").each(function(){
        // will loop through
        var images = $(this).attr("href");
            $("#gallery").append("<div class='col-sm-4'>" +
            "<figure class='photo-frame'>" +
            "<img src=' " +
            folder +
            images +
            "' class='gallery'/>" +
            "</figure>" +
            "</div>" );

        });
      }
    });
  };
