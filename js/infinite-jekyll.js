/* resize images */

var imgCheck = function(){
  $('a[href^="http://"]').not('[href*="taigeair.com"]').attr('target','_blank');
  $('a[href^="https://"]').not('[href*="taigeair.com"]').attr('target','_blank');


  var imgCount = $('img').length

  for (i = 0 ; i< imgCount; i++){
    height = $('img')[i].height;
    width = $('img')[i].width;
    ratio = height/width;
    if(ratio>1.5){
    console.log(ratio);
    $('img:eq('+i+')').css("height",600)
    } 
    else if(ratio>1){
    console.log(ratio);
    $('img:eq('+i+')').css("height",700)
    }
  }
}




/* The MIT License (MIT)

Copyright (c) 2013 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

$(function() {
  
  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = $(".posts").children().length,
      loadNewPostsThreshold = 3000;
  
  // Load the JSON file containing all URLs
  $.getJSON('/all-posts.json', function(data) {
    postURLs = data["posts"];
    
    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad)
      disableFetching();
  });
	
  // If there's no spinner, it's not a page where posts should be fetched
  if ($(".infinite-spinner").length < 1)
    shouldFetchPosts = false;
	
  // Are we close to the end of the page? If we are, load more posts
  $(window).scroll(function(e){
    if (!shouldFetchPosts || isFetchingPosts) return;
    
    var windowHeight = $(window).height(),
        windowScrollPosition = $(window).scrollTop(),
        bottomScrollPosition = windowHeight + windowScrollPosition,
        documentHeight = $(document).height();
    
    // If we've scrolled past the loadNewPostsThreshold, fetch posts
    if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
      fetchPosts();
      //imgCheck();
    }
  });
  
  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;
    
    isFetchingPosts = true;
    
    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
        postCount = $(".posts").children().length,
        callback = function() {
          loadedPosts++;
          var postIndex = postCount + loadedPosts;
          
          if (postIndex > postURLs.length-1) {
            disableFetching();
            return;
          }
          
          if (loadedPosts < postsToLoad) {
            fetchPostWithIndex(postIndex, callback);
          } else {
            isFetchingPosts = false;
          }
        };
		
    fetchPostWithIndex(postCount + loadedPosts, callback);
  }
	
  function fetchPostWithIndex(index, callback) {
    var postURL = postURLs[index];
		
    $.get(postURL, function(data) {
      $(data).find(".post").appendTo(".posts");
      callback();
    });
  }
  
  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $(".infinite-spinner").fadeOut();
  }
	
});



/* 

Shrink Grow Stuff

*/

jQuery(document).ready(function(){

      // re-size image 

      //imgCheck();

      //when scroll past point, make full width
      var headerPosition = jQuery('.dolla').offset().top;
      var scrollBottom = 0;
      var nearBottom = 0;

      var stickyNav = function(scrollPosition){
      if (scrollPosition > headerPosition + 160) {
      jQuery('.main').addClass('grow');
      jQuery('.header').addClass('shrink');
      jQuery('.top').removeClass('pre-animation');
      jQuery('.artIndex').removeClass('pre-animation');

      } else {
      jQuery('.main').removeClass('grow');
      jQuery('.header').removeClass('shrink');
      jQuery('.top').addClass('pre-animation');
      jQuery('.artIndex').addClass('pre-animation');

        }


      };
      


      $(window).bind("load resize scroll",function(e){
          var scrollPosition = jQuery(window).scrollTop();
          var scrollBottom = $(window).scrollTop() + $(window).height();
          var nearBottom = jQuery('.footer').offset().top;

          /*      console.log(headerPosition);
                  console.log(scrollPosition);

          */
                  console.log(scrollBottom);
                  console.log(nearBottom);
          //ignore if mobile view
          if(jQuery(window).width() > 884) {
          stickyNav(scrollPosition);
          };

          if (scrollBottom > nearBottom){
          jQuery('.section.pre-animation').removeClass('pre-animation');
      }
      });


      // scroll to top function
      jQuery('div.top').click(function(){
        window.scrollTo(0, 0);
      });
    });

