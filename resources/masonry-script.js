// Load is used to ensure all images have been loaded, impossible with document

jQuery(window).load(function () {



  // Takes the gutter width from the bottom margin of .post

  var gutter = parseInt(jQuery('.post').css('marginBottom'));
  var container = jQuery('#posts');


  if( container.length ) {

  // Creates an instance of Masonry on #posts

  container.masonry({
    gutter: gutter,
    itemSelector: '.post',
    columnWidth: '.post'
  });



  // This code fires every time a user resizes the screen and only affects .post elements
  // whose parent class isn't .container. Triggers resize first so nothing looks weird.

  jQuery(window).bind('resize', function () {
    if (!jQuery('#posts').parent().hasClass('container')) {






      // Calculates how many .post elements will actually fit per row. Could this code be cleaner?
      if(typeof post_width !== 'undefined'){
        posts_per_row = jQuery('#posts').innerWidth() / post_width;
        floor_posts_width = (Math.floor(posts_per_row) * post_width) - gutter;
        ceil_posts_width = (Math.ceil(posts_per_row) * post_width) - gutter;
        posts_width = (ceil_posts_width > jQuery('#posts').innerWidth()) ? floor_posts_width : ceil_posts_width;
        if (posts_width == jQuery('.post').width()) {
          posts_width = '100%';
        }



        // Ensures that all top-level elements have equal width and stay centered

        jQuery('#posts, #grid').css('width', posts_width);
        jQuery('#grid').css({'margin': '0 auto'});


      }
    }
  }).trigger('resize');

  }


});
/*
     FILE ARCHIVED ON 16:02:58 Jun 17, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:25:06 Aug 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.017
  LoadShardBlock: 174.261 (3)
  CDXLines.iter: 20.152 (3)
  PetaboxLoader3.datanode: 943.124 (4)
  RedisCDXSource: 0.872
  captures_list: 200.398
  load_resource: 964.307
  exclusion.robots.policy: 0.415
  PetaboxLoader3.resolve: 182.097 (2)
  exclusion.robots: 0.435
*/