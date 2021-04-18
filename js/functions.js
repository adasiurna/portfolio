
function headerBackgroundoAdjust() {
  var header_riba = 50;
  if (header_riba < scrollY) {
    $('header').removeClass('header-black');
  } else {
    $('header').addClass('header-black');
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

function renderPortfolioPagesInfo(data) {
  for (var i = 0; i < data.length; i++) {
    var id = '#' + data[i].id;
    if ($(id).length) {
      console.log(id);
      var shortDescription = data[i].shortDesc;
      var longDescription = data[i].longDesc;
      var year = data[i].year;
      console.log(shortDescription);
      $(id).find('.about-h3').html(shortDescription);
      $(id).find('.about-p').html(longDescription);
      $(id).find('.about-year').html(year);
    }
  }
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
