console.log("hi");

const imgBackBtnEl = document.getElementById("img-back");

function imagesBack() {
  console.log("button was clicked");
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

draw = function () {
  const position = 20;
  const speed = 3;
  background(202, 255, 97);

  FileList(66, 66, 66);
  position = position + speed;
  // mouseX and mouseY
  // mouseIsPressed
  ellipse(position, mouseY, 50, 50);
  if (mouseIsPressed) {
    ellipse(mouseX, position, 50, 50);
  }

  if (position > 375) {
    speed = -5;
  }
  if (position < 25) {
    speed = 5;
  }
};
