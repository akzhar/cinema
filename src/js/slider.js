var photoBig = document.querySelector('.gallery__big');
var photoSmall = document.querySelectorAll('.gallery__small > img');

for(var i = 0; i < photoSmall.length; i++) {
  photoSmall[i].addEventListener("click", function() {
    photoBig.setAttribute("src", this.getAttribute("src"));
  });
};
