function Gosling(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getGosling = {
  init: function(myGosling){
    this.myGosling = myGosling;
  },

  horizontal: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "vertical";
    });
  }, 

  square: function (){
    return this.myGosling.filter(function(myGosling){
      return myGosling.ratio === "square";
    });  
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myGosling = [ 
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-1.png"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-2.gif"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-3.jpg"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-4.gif"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-5.gif"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-6.jpg"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-7.gif"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-8.png"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-9.gif"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-10.gif"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-11.gif"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-12.png"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-13.jpg"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-14.png"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-15.gif"),
new Gosling("horizontal", "//heygirl.io/img/gosling-horiz-16.png"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-1.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-3.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-4.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-5.gif"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-6.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-7.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-8.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-9.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-10.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-11.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-12.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-13.png"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-14.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-15.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-16.gif"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-17.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-18.jpg"),
new Gosling("vertical", "//heygirl.io/img/gosling-vert-19.png"),
new Gosling("square", "//heygirl.io/img/gosling-square-1.jpg"),
new Gosling("square", "//heygirl.io/img/gosling-square-2.jpg"),
new Gosling("square", "//heygirl.io/img/gosling-square-3.jpg"),
new Gosling("square", "//heygirl.io/img/gosling-square-4.gif"),
new Gosling("square", "//heygirl.io/img/gosling-square-5.gif"),
new Gosling("square", "//heygirl.io/img/gosling-square-6.png"),
new Gosling("square", "//heygirl.io/img/gosling-square-7.gif"),
new Gosling("square", "//heygirl.io/img/gosling-square-8.gif"),
new Gosling("square", "//heygirl.io/img/gosling-square-9.gif"),
new Gosling("square", "//heygirl.io/img/gosling-square-10.gif"),
new Gosling("square", "//heygirl.io/img/gosling-square-11.jpg"),
new Gosling("square", "//heygirl.io/img/gosling-square-12.jpg"),
new Gosling("square", "//heygirl.io/img/gosling-square-13.jpg"),
new Gosling("square", "//heygirl.io/img/gosling-square-14.png")

]

function imageRatio(image) {
  var proportion = image.height/image.width;

  if(proportion > 1) {
    return "vertical";
  } else if(proportion === 1) {
    return "square";
  } else if(proportion < 1) {
    return "horizontal";
  }
}     
           
(function (document) {
  
  getGosling.init(myGosling);
  var images = document.getElementsByTagName('img'), length = images.length
 
  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getGosling[ratio]());
    var img = getGosling[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
