// Object-Oriented JavaScript


function Container() {
  this.id = '';
  this.className = '';
  this.htmlCode = '';
}

Container.prototype.render = function() {
  return this.htmlCode;
}

Container.prototype.removeContainer = function(elem) {
  return elem.remove();
}


function Menu(my_id, my_class, my_items) {
  Container.call(this);
  this.id = my_id;
  this.className = my_class;
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


function MenuItem(my_href, my_name) {
  Container.call(this);
  this.className = "menu-item";
  this.href = my_href;
  this.name = my_name;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function() {
  return `<li class='${this.className}'><a href='${this.href}'>${this.name}</a></li>`;
}


const m_item1 = new MenuItem("/", "Главная");
const m_item2 = new MenuItem("/catalogue/", "Каталог");
const m_item3 = new MenuItem("/gallery/", "Галерея");
const m_items = {0: m_item1, 1: m_item2, 2: m_item3};

const menu = new Menu("my_menu", "menu_class", m_items);

document.write(menu.render());