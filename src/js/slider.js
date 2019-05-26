var photoBig = document.querySelector('.gallery__big');
var photoSmall = document.querySelectorAll('.gallery__small');

for(var i = 0; i < photoSmall.length; i++) {
  photoSmall[i].addEventListener("click", function(evt) {
    photoBig.setAttribute("src", this.firstChild.getAttribute("data-img-b"));
    photoBig.setAttribute("title", this.firstChild.getAttribute("alt"));
  });
};
