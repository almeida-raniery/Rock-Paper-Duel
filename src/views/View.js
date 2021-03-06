class View {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.cont = this.canvas.getContext("2d");
  }

  init() {
     this.canvas.width = 320;
     this.canvas.height = 220;

     this.cont.imageSmoothingEnabled = false;
     this.cont.webkitImageSmoothingEnabled = false;
  }

  refresh() {
    this.cont.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawSprite(img, { sx, sy, x, y, scale }, width = 32) {
    this.cont.drawImage(
      img,
      sx * width,
      sy * width,
      width,
      width,
      x,
      y,
      scale * width,
      scale * width
    );
  }
}

export default View;