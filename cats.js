$(function () {
  $('.summon-cats').on('click', function (){
      $('div img').remove();
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET'
    }).done(function(responseData){
      var catJSON = responseData
      var catlist = catJSON["cats"]


      var cat1_photo = catlist[0].photo;
      $('<img>').attr({
        src: cat1_photo,
        alt: 'Photo of' + catlist[0].name
      }).appendTo('#cat1')

      var cat2_photo = catlist[1].photo;
      $('<img>').attr({
        src: cat2_photo,
        alt: 'Photo of ' + catlist[1].name
      }).appendTo('#cat2')

      var cat3_photo = catlist[2].photo;
      $('<img>').attr({
        src: cat3_photo,
        alt: 'Photo of ' + catlist[2].name
      }).appendTo('#cat3')



    });
  });
});
