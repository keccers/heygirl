function CherylMerkowski(ratio, imageurl){
  this.ratio = ratio;
  this.imageurl = imageurl;
}

 var getCherylMerkowski = {
  init: function(myCherylMerkowski){
    this.myCherylMerkowski = myCherylMerkowski;
  },

  horizontal: function(){
    return this.myCherylMerkowski.filter(function(myCherylMerkowski){
      return myCherylMerkowski.ratio === "horizontal";
    });
  },

  vertical: function(){
    return this.myCherylMerkowski.filter(function(myCherylMerkowski){
      return myCherylMerkowski.ratio === "vertical";
    });
  }, 

  square: function (){
    return this.myCherylMerkowski.filter(function(myCherylMerkowski){
      return myCherylMerkowski.ratio === "square";
    });  
  }
 };

 function Randomize(images){
    return Math.floor(Math.random() * images.length)
 }

var myCherylMerkowski = [ 
new CherylMerkowski("horizontal", "http://1.bp.blogspot.com/_xJ7mmS3wE6c/THSfEGgCkxI/AAAAAAAAAAk/MOUNexlY5nc/s1600/wh92-dootiemonsturd.jpg"), 
new CherylMerkowski("horizontal", "http://i1.ytimg.com/vi/wX7X3skIVTM/hqdefault.jpg?feature=og"), 
new CherylMerkowski("horizontal", "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-frc3/294195_522294937805874_1151588118_n.jpg"),
new CherylMerkowski("horizontal", "https://sphotos-b-lga.xx.fbcdn.net/hphotos-ash3/217441_147638648728644_1895647713_n.jpg"),
new CherylMerkowski("horizontal","http://yeastradio.com/images/greylch.jpg"),
new CherylMerkowski("horizontal","http://yeastradio.com/images/chair.jpg"),
new CherylMerkowski("vertical", "http://www.jaimeshade.com/wp-content/uploads/2011/03/glamour.jpg"), 
new CherylMerkowski("vertical", "http://yeastradio.com/images/rilchug.jpg"),
new CherylMerkowski("vertical", "http://farm3.staticflickr.com/2495/4005343356_e8ba71fb0b.jpg"), 
new CherylMerkowski("vertical", "https://sphotos-b-lga.xx.fbcdn.net/hphotos-prn1/1148984_10151615742316902_191224180_n.jpg"),
new CherylMerkowski("vertical", "http://userserve-ak.last.fm/serve/252/3963099.jpg"),
new CherylMerkowski("vertical", "http://farm3.staticflickr.com/2507/4182122904_a9d5fc401d_s.jpg"),
new CherylMerkowski("vertical", "http://yeastradio.com/images/rilchtangle.jpg"),
new CherylMerkowski("vertical", "http://yeastradio.com/images/rect.jpg"),
new CherylMerkowski("vertical", "http://yeastradio.com/wp-content/uploads/2008/05/rilldren.jpg"),
new CherylMerkowski("vertical", "http://1.bp.blogspot.com/_xJ7mmS3wE6c/THSfEGgCkxI/AAAAAAAAAAk/MOUNexlY5nc/s1600/wh92-dootiemonsturd.jpg"),
new CherylMerkowski("square", "http://yeastradio.com/images/rilchug.jpg"),
new CherylMerkowski("square", "http://yeastradio.com/images/bortril.jpg"),
new CherylMerkowski("square", "http://yeastradio.com/images/rilchgogo.jpg"),
new CherylMerkowski("square", "http://yeastradio.com/images/mugrilch.jpg"),
new CherylMerkowski("square", "http://yeastradio.com/images/vsmoke.jpg"),
new CherylMerkowski("square", "http://yeastradio.com/images/hatrilch.jpg"),
new CherylMerkowski("square", "http://yeastradio.com/images/crimmy.jpg"),
new CherylMerkowski("square", "http://yeastradio.com/images/yeller.jpg")      
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
  
  getCherylMerkowski.init(myCherylMerkowski);
  var images = document.getElementsByTagName('img'), length = images.length
 
  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    var number = Randomize(getCherylMerkowski[ratio]());
    var img = getCherylMerkowski[ratio]()[number];
    images[i].src = img.imageurl
  }

})(document);
