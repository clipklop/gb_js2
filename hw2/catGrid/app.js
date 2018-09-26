// Thumb


const dataURL = "https://gist.githubusercontent.com/gabriel-fallen/2a74b472ef78b708d5926cd604c7ee34/raw/ce39f77f530b786669f3823aa030c01b34e4683d/gallery.json";


// Domain model
function Image(json) {
  this.thumb = json.thumb;
  this.full = json.full;
}


// Visual components (presentation)
function Component(id) {
  this.id = id;
}

Component.prototype.render = function() {
  return `<div id="${this.id}></div>"`;
}


function Thumb(id, image, onclick) {
  Component.call(this, id);
  this.image = image;
  this.onclick = onclick;
}

Thumb.prototype = Object.create(Component.prototype);
Thumb.prototype.constructor = Thumb;
Thumb.prototype.render = function() {
  setTimeout(() => {
    const img = document.getElementById(this.id);
    img.addEventListener("click", this.onclick);
  }, 500);
  return `<img id="${this.id}" class="thumb" src="${this.image.thumb}" />`;
}


function Full(id, image) {
  Component.call(this, id);
  this.image = image;
}

Full.prototype = Object.create(Component.prototype);
Full.prototype.constructor = Full;
Full.prototype.render = function() {
  return `<img id="${this.id}" src="${this.image.full}" />`;
}


function ThumbGrid(id, images, onclick) {
  Component.call(this, id);
  this.images = images;
  this.onclick = onclick;
  let tid = 0;
  this.thumbs = images.map((img, tid) => new Thumb(`thumb-${tid}`, img,
    () => this.onclick(tid)));
}

ThumbGrid.prototype = Object.create(Component.prototype);
ThumbGrid.prototype.constructor = ThumbGrid;
ThumbGrid.prototype.render = function() { 
  let grid = `<div id="${this.id}" class="thumb-grid">\n`;
  this.thumbs.forEach(element => grid += element.render());
  grid += "\n</div>\n";
  return grid;
}


function Gallery(id, images) {
  Component.call(this, id);
  this.currentFull = 0;
  this.images = images;
  this.grid = new ThumbGrid("thumbGrid0", images, ind => this.setFull(ind));
  this.full = new Full('fullImage', images[this.currentFull]);
}

Gallery.prototype = Object.create(Component.prototype);
Gallery.prototype.constructor = Gallery;
Gallery.prototype.render = function() {
  let gall = `<div id="${this.id}" class="gallery">\n`;
  gall += this.grid.render();
  gall += "\n<div id=\"fullContainer\">\n"
  gall += this.full.render();
  gall += "\n</div>\n";
  gall += "\n</div>\n";
  return gall;
}

Gallery.prototype.setFull = function(index) {
  this.currentFull = index;
  this.full = new Full('fullImage', this.images[this.currentFull]);
  const container = document.getElementById("fullContainer");
  container.innerHTML = this.full.render();
}


const appDiv = document.getElementById("app");

fetch(dataURL)
  .then(response => response.json())
  .then(json => {
    const images = json.map(img => new Image(img)),
          gallery = new Gallery("gallery", images);

    appDiv.innerHTML = gallery.render();
});