"use strict";
$(document).ready(function () {


  headerBackgroundoAdjust();
  renderResumeBlocks(resume_items);
  renderPortfolioGallery(portfolio_gallery);
  //renderPortfolioPagesInfo(portfolio_gallery);
  menuActiveClass();


  // on scroll - update header background
  $(window).scroll(function () {
    headerBackgroundoAdjust();
    menuActiveClass();
  });

  //on filter item click - render only those portfolio items that have the clicked tag
  $('#portfolio_gallery').on('click', '#portfolio_filter > div', function () {
    var tag = $(this).text(),
      kiekis = $('#portfolio_content > .portfolio-item').length,
      element;

    if (tag === 'ALL') {
      for (var i = 0; i < kiekis; i++) {
        element = $('#portfolio_content > .portfolio-item').eq(i);
        element.css('display', 'block');
      }
    } else {
      for (var i = 0; i < kiekis; i++) {
        element = $('#portfolio_content > .portfolio-item').eq(i);
        if (tag === element.find('.tag').text()) {
          element.css('display', 'block');
        } else {
          element.css('display', 'none');
        }
      }
    }
  });


  //on navigation button click - show navigation popup
  $('.nav-pic').click(function () {
    $('.popup').show();
  });

  $('.popup > i').click(function () {
    $(this).parents('.popup').hide();
  });




});

