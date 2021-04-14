
function headerBackgroundoAdjust() {
  var header_riba = 50;
  if (header_riba < scrollY) {
    $('header').removeClass('juodas');
  } else {
    $('header').addClass('juodas');
  }
  return;
}

function menuActiveClass() {
  var nuorodu_skaicius = $('#main_nav > a').length,
    href_verte = '';
  for (var i = 0; i < nuorodu_skaicius; i++) {
    href_verte = $('#main_nav > a').eq(i).attr('href');
    var scroll_top = scrollY;
    if (href_verte === '#contacts') {
      scroll_top = scrollY + 500;
    } else {
      scroll_top = scrollY;
    }

    if (scroll_top >= ($(href_verte).offset().top) &&
      scroll_top < $(href_verte).offset().top + $(href_verte).height()) {
      var ofsetop = $(href_verte).offset().top;
      var hight = $(href_verte).height();
      $('#main_nav > a').removeClass('active');
      $('#main_nav > a[href="' + href_verte + '"]').addClass('active');
    }
  }
  return;
}


function renderServiceBlocks(data) {
  var HTML = '';
  for (var i = 0; i < 3; i++) {
    HTML += '<div class="service-box">\
                  <i class="fa fa-'+ data[i].ikona + '"></i>\
                  <h4>'+ data[i].title + '</h4>\
                  <p>'+ data[i].tekstas + '</p></div>';
  }
  $('#services > div > div').html(HTML);
  return;
};

function renderResumeBlocks(data) {
  var HTMLwork = '';
  var HTMLeducation = '';
  var tipas = '';
  for (var i = 0; i < data.length; i++) {
    //get type
    tipas = data[i].type.toLowerCase();
    if (tipas === 'work') {
      HTMLwork += '<div class="resume-box">\
          <h2>'+ data[i].place + '</h2>\
          <h3>'+ data[i].date + '</h3>\
          <p>'+ data[i].description + '</p>\
          </div>';
    } else {
      if (tipas === 'education') {
        HTMLeducation += '<div class="resume-box">\
              <h2>'+ data[i].place + '</h2>\
              <h3>'+ data[i].date + '</h3>\
              <p>'+ data[i].description + '</p>\
              </div>';
      } else {
        alert('tikrink data failą');
      }
    }
  }
  $('#resume_work_box').html(HTMLwork);
  $('#resume_education_box').html(HTMLeducation);
  return;
}


function renderPortfolioGallery(data) {
  var HTML = '';
  HTML += renderPorftolioGalleryFilter(data);
  HTML += renderPortfolioGalleryContent(data);
  $('#portfolio_gallery').html(HTML);
  return;
}


function renderPorftolioGalleryFilter(data) {
  var unikalus_tagai = [];
  var ar_unikalus = 0;
  var ka_itraukti = '';
  for (var i = 0; i < data.length; i++) {
    ar_unikalus = 0;
    ka_itraukti = data[i].tag;
    if (ka_itraukti !== '' && typeof (ka_itraukti) === 'string') {
      for (var e = 0; e < unikalus_tagai.length; e++) {
        if (ka_itraukti.toLowerCase() === unikalus_tagai[e]) {
          ar_unikalus++;
        }
      }
      if (ar_unikalus === 0) {
        unikalus_tagai.push(ka_itraukti.toLowerCase());
      }
    } else {
      console.log('Sorry, it is not a text or it is empty');
    }
  }
  var HTML = '<div id="portfolio_filter">\
                  <div class="active">ALL</div>';
  for (var i = 0; i < unikalus_tagai.length; i++) {
    HTML += '<div>' + unikalus_tagai[i] + '</div>';
  }
  HTML += '</div>';
  return HTML;
};

function renderPortfolioGalleryContent(data) {
  var HTML = '<div id="portfolio_content">';
  for (var i = 0; i < data.length; i++) {
    HTML += renderOnePortfolioElement(data[i]);
  }
  HTML += '</div>';
  return HTML;
}

function renderOnePortfolioElement(data) {
  var HTML = '<div style="background-image: url(img/' + data.picture + '.jpg);" 					class="portfolio-item">\
                  <div class="black-layer"></div>\
                  <div class="tekstines-vertes">\
                      <div class="title-2">'+ data.name + '</div>\
                      <div class="tag">'+ data.tag.toLowerCase() + '</div>\
          <a class="link" href="'+ data.url + '">More...</a>\
                  </div>\
              </div>';
  return HTML;
};


var slideIndex = 1;
showDivs(slideIndex, n = 1);

function plusDivs(n) {
  var prevOrNext = n;
  showDivs(slideIndex += n, prevOrNext);
}

function showDivs(n, prevOrNext) {
  var x = document.getElementsByClassName("testimonial");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  if (prevOrNext === 1) {
    //button forward
    for (var i = 0; i < x.length; i++) {
      $('.testimonials > div').removeClass('use-animation-back').removeClass('use-animation');
      //$('.testimonials > div').;
      $('.testimonials > div').css('left', '1200px').css('display', 'none');

      $('.nav > div').removeClass('active');
    }
    $(x[slideIndex - 1]).css('display', 'block').addClass('use-animation-back');
    $('#dot' + (slideIndex - 1)).addClass('active');
  } else {
    //button back
    for (var i = 0; i < x.length; i++) {
      $('.testimonials > div').removeClass('use-animation-back');
      $('.testimonials > div').removeClass('use-animation');
      $('.testimonials > div').css('left', '-1200px');
      $('.nav > div').removeClass('active');
    }
    $(x[slideIndex - 1]).css('display', 'block').addClass('use-animation');
    $('#dot' + (slideIndex - 1)).addClass('active');
  }
  return;
}
function slideOnDotClick(i) {
  $('.testimonials > div').css('left', '-1300px');
  $('.testimonials > div').css('display', 'block');
  $('.testimonials > div').removeClass("use-animation");
  $('.testimonials > div').removeClass("use-animation-back");
  $('.nav > div').removeClass('active');
  $('#testim' + i).addClass("use-animation");
  $('#dot' + i).addClass('active');
  return;
};


function renderMyBlogItems(data) {
  var HTML = '';
  knopke = '<form class="about-button" type="button" >READ MORE</form></div>';
  for (var i = 0; i < data.length; i++) {
    HTML += '<div class="blog-box">\
      <div class="blog-img"><img src="img/'+ data[i].picture + '.jpg" title="blog pic"></div>\
      <div class="blog-text">\
        <h3>'+ data[i].title + '</h3>\
        <h4>Posted On '+ data[i].date + '</h4>\
        <p>'+ data[i].description + '</p>\
      </div>' + knopke;
  };
  $('#blog-box-container').html(HTML);
  return;
};


