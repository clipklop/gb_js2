// Object-Oriented JavaScript #2


function Container(id, className) {
  this.id = id;
  this.className = className
  this.htmlCode = '';
}

Container.prototype.render = function() {
  return this.htmlCode;
}

Container.prototype.removeContainer = function(elem) {
  return elem.remove();
}


function Menu(my_id, my_class, my_items) {
  Container.call(my_id, my_class);
  this.items = my_items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function() {
  let result = `<ul class='${this.className}' id='${this.id}'>\n`;

  for(let item in this.items){
    if (this.items[item] instanceof MenuItem) {
      result += this.items[item].render();
    }
  }
  result += "\n</ul>";
  return result;
}


function MenuItem(my_id, my_href, my_name) {
  Container.call(this, my_id, "menu-item");
  this.href = my_href;
  this.name = my_name;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function() {
  return `<li class='${this.className}'><a href='${this.href}'>${this.name}</a></li>`;
}


function SubMenuItem(my_id, my_href, my_name, sub_menu) {
  MenuItem.call(this, my_id, my_href, my_name);
  this.items = sub_menu;
}

SubMenuItem.prototype = Object.create(MenuItem.prototype);
SubMenuItem.prototype.constructor = SubMenuItem;
SubMenuItem.prototype.render = function() {
  const sub_menu = Menu.prototype.render.call(this);
  return `<li class='${this.className}'><a href='${this.href}'>${this.name}</a>${sub_menu}</li>`;
}


const c_item1 = new MenuItem('smi1', "/catalog/men", "Men");
const c_item2 = new MenuItem('smi2', "/catalog/women", "Women");
const c_item3 = new MenuItem('smi3', "/catalog/kids", "Kids");
const c_item4 = new MenuItem('smi4', "/catalog/accessories", "Accessories");
const sub_items = [c_item1, c_item2, c_item3, c_item4];

const p_item1 = new MenuItem('pmi1', "/promo/backtoschool", "Back To School");
const p_item2 = new MenuItem('pmi2', "/catalog/sneaker", "Sneaker Day");
const p_item3 = new MenuItem('pmi3', "/catalog/wintersale", "Winter Sale");
const promo_items = [p_item1, p_item2, p_item3];

const m_item1 = new MenuItem('mi1', "/", "Main");
const m_item2 = new MenuItem('mi2', "/", "Profile");
const m_item3 = new SubMenuItem('mi3', "/catalog/", "Catalog", sub_items);
const m_item4 = new SubMenuItem('mi4', "/promo/", "Promo", promo_items);
const m_items = {0: m_item1, 1: m_item2, 2: m_item3, 3: m_item4};

const menu = new Menu("my_menu", "menu_class", m_items);

document.write(menu.render());