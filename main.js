var bullsData;

$(document).ready(function(){
  page.init();
});
var page = {
  url : 'http://www.reddit.com/r/chicagobulls.json',
  init : function () {
    page.initStyling();
    page.initEvents();
  },
  initEvents: function() {
    page.getTitles();
  },
  initStyling : function () {

  },
  getTitles: function () {

    $.ajax({
      url: page.url,
      method: 'GET',
      success: function(data) {
        bullsData = data;
        for (var i= 0; i < bullsData.data.children.length; i++){
          $('body').append('<a target= "_blank" href="' + bullsData.data.children[i].data.url + '"' + "</a>" + '<h3>' + bullsData.data.children[i].data.title + '</h3>');  
        }
      }
    });
  },
};
