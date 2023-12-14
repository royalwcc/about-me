console.log("hi");

const imgBackBtnEl = document.getElementById("img-back");
let arrayOfHiddenImages = [];

function imagesBack() {
  arrayOfHiddenImages.map((imageID) => {
    document.getElementById(imageID).style.display = "block";
  });
}

arrayOfHiddenImages.map((imageId) => {});
function hideObject(imageID) {
  arrayOfHiddenImages.push(imageID);
  const goonImg = document.getElementById(imageID);
  goonImg.style.display = "none";
  console.log(imgBackBtnEl.style);
  if (imgBackBtnEl.style.display === "none" || !imgBackBtnEl.style.display) {
    imgBackBtnEl.style.display = "block";
  }
}

$(document).mousemove(function (e) {
  $("#follow").css({
    left: e.pageX,
    top: e.pageY,
  });
});
