(function() {
  'use strict';
  
  // Fetch the featured article data
  fetch('https://kaialisa.github.io/wasserzeitung-embed/featured-article.json')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(function(data) {
      // Find the container element
      var container = document.getElementById('wasserzeitung-widget');
      if (!container) {
        console.error('Wasserzeitung widget container not found');
        return;
      }
      
      // Inject the HTML structure WITHOUT any styling
      // Customer can style these classes themselves
      container.innerHTML = 
        '<a href="' + data.url + '" title="' + data.title + '" class="wz-newsItem" target="_blank" rel="noopener">' +
          '<span class="wz-imgWrap" style="background-image:url(\'' + data.image + '\');">' +
            '<span class="wz-caption">' + data.caption + '</span>' +
          '</span>' +
          '<div class="wz-info">' +
            '<h1 class="wz-title">' + data.title + '</h1>' +
            '<p class="wz-excerpt">' + data.excerpt + '</p>' +
            '<span class="wz-iconMore" aria-hidden="true"></span>' +
          '</div>' +
        '</a>';
    })
    .catch(function(error) {
      console.error('Error loading Wasserzeitung widget:', error);
    });
})();