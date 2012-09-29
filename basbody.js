//<!--
// var baseUrl = 'http://dl.dropbox.com/u/107442979/japkedoodeman.nl/Photo%20Albums/12-05%20May/';

$('#vlightbox1').css('display','none').parent().append('<h2 id="loadingSpan" style="display: none; color: white;">Loading pictures...</h2>');
$('#loadingSpan').fadeIn(1000).fadeOut(1000).fadeIn(2000).fadeOut(2000).fadeIn(3000).fadeOut(3000).fadeIn(4000);

$('#vlightbox1 a').attr('href', function(index, href) {
  if (href.substring(0, 4) != 'http' ) {
    href = baseUrl + href; 

    $(this).find('img').attr('src', function(index, src) {
      return baseUrl + src;
    });

    $(this).find('img').css('padding', function(index, value) {
      return "0px";
    });
  }
  return href;
});

$('head').append('<link rel="stylesheet" href="'+baseUrl+'engine/css/vlightbox1.css" type="text/css" />');
$('head').append('<link rel="stylesheet" href="'+baseUrl+'engine/css/visuallightbox.css" type="text/css" media="screen" />');
$('head').append('<style type="text/css" media="screen">#lightboxImage{margin-bottom: -16px; overflow: hidden;} #imageContainer{margin-bottom: -16px; overflow: hidden;} #imageContainerMain{margin-bottom: 0px; overflow: hidden;}</style>');

$.getScript(baseUrl+'engine/js/visuallightbox.js', function(data, textStatus, jqxhr) {
  if (window.Lightbox == undefined) {
    window.Lightbox = new jQuery().visualLightbox ({
      autoPlay:true,
      borderSize:57,
      classNames:'vlightbox1',
      closeLocation:'top',
      descSliding:false,
      enableRightClick:false,
      enableSlideshow:true,
      resizeSpeed:7,
      slideTime:3,
      startZoom:false
    });

    // move logo
    $('body').append($('#imageContainer div:eq(2)'));
    $('#prevLinkImg').appendTo("#lightboxFrameBody").css('left','-8px');
    $('#nextLinkImg').appendTo("#lightboxFrameBody").css('right','-8px');

    // this function clears all timeouts, and therefore stops the slideshow
    function stopTimeouts () {
        var highestTimeoutId = setTimeout(function(){},10000);
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i); 
        }
    }

    // preload the next and prev images
    $('#nextLinkImg').css('visibility','hidden').css('background','url('+baseUrl+'/engine/images/next.png) 97% center no-repeat');
    $('#prevLinkImg').css('visibility','hidden').css('background','url('+baseUrl+'/engine/images/prev.png) 97% center no-repeat');

    // attach mouseover event to the image lightbox
    $('#imageContainer').parent().parent().mousemove(function() {
      if ($('#loading').css('display') == 'none' && $('#lightboxImage').css('opacity') == '1') {

        // remove timeouts to stop the slide show
        stopTimeouts();

        // do nothing if the next image is already showing
        if ($('#nextLinkImg').css('visibility') == 'hidden') {

          // this prevents the existing handler from hiding the next and prev images
          $('#lightboxFrameBody').unbind("mouseover");

          // show the next and prev images
          $('#nextLinkImg').css('visibility','visible');
          $('#prevLinkImg').css('visibility','visible');
        }
      }
    }).mouseleave(function(){
      if ($('#loading').css('display') == 'none' && $('#lightboxImage').css('opacity') == '1') {

        $("#nextLinkImg").click(function(){
            stopTimeouts();

            // hide the next and prev images
            $('#nextLinkImg').css('visibility','hidden');
            $('#prevLinkImg').css('visibility','hidden');
        });
        $("#prevLinkImg").click(function(){
            stopTimeouts();

            // hide the next and prev images
            $('#nextLinkImg').css('visibility','hidden');
            $('#prevLinkImg').css('visibility','hidden');
        });

        $("#nextLinkImg").click();

        // hide the next and prev images
        $('#nextLinkImg').css('visibility','hidden');
        $('#prevLinkImg').css('visibility','hidden');
      }
    });
  }

});

$(window).load(function() { 
  $('#loadingSpan').remove();
  $('#vlightbox1').css('display','');
});

$(document).ready(function() {
    var commentEditorSrc = $('#comment-editor').attr('src');
//  $('#comment-editor').remove();
//<iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'></iframe>
//  $('#comment-editor-src').after('<div class="blogger-iframe-colorize blogger-comment-from-post" height="410" id="comment-editor" name="comment-editor" width="100%"></div>')
//  $('#comment-editor').load(commentEditorSrc);

//var data = window.JSON.parse(commentEditorSrc);
/*
$('#comment-editor').load(commentEditorSrc, function() {
  alert('Load was performed.');
});
*/

});
//-->

