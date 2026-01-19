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
      
      // Inject the HTML with the article data
      container.innerHTML = 
        '<style>' +
        '#wasserzeitung-widget * { box-sizing: border-box; }' +
        '#wasserzeitung-widget { font-family: VistaSans, Calibri, Verdana, Arial, sans-serif; padding-left: 10px; padding-right: 10px; }' +
        '#wasserzeitung-widget .wz-newsItem { display: block; width: 100%; background: #fff; position: relative; color: #003e7c; text-decoration: none; }' +
        '#wasserzeitung-widget .wz-imgWrap { width: 100%; height: 0; padding-bottom: 52%; background-position: center top; background-repeat: no-repeat; background-size: cover; display: block; position: relative; overflow: visible; }' +
        '#wasserzeitung-widget .wz-caption { background: #003E7C; color: #FFF; position: absolute; left: 0; bottom: 20px; padding: 5px 10px; white-space: nowrap; text-overflow: ellipsis; overflow: visible; max-width: 90%; margin: 0; font-size: 15px; line-height: 1.2; }' +
        '#wasserzeitung-widget .wz-caption::before { content: ""; position: absolute; left: -10px; top: 0; height: 100%; width: 10px; background: #69AF22; }' +
        '#wasserzeitung-widget .wz-info { padding: 10px; }' +
        '#wasserzeitung-widget .wz-title { color: #69AF22; font-weight: 700; font-size: 1.4667em; line-height: 1.1; margin: 0 0 .35em 0; }' +
        '#wasserzeitung-widget .wz-excerpt { margin: 0 0 12px 0; line-height: 1.4667; font-size: 15px; color: #003e7c; }' +
        '#wasserzeitung-widget .wz-iconMore { position: absolute; right: 5px; bottom: 5px; width: 24px; height: 24px; font-size: 22px; line-height: 24px; color: #003e7c; text-align: center; font-weight: 700; }' +
        '#wasserzeitung-widget .wz-iconMore::before { content: "›"; display: block; transform: translateY(-1px); }' +
        '@media (min-width: 768px) { #wasserzeitung-widget .wz-newsItem { max-width: 300px; } }' +
        '</style>' +
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