/*
 * HW1 GB_JS2 : Object-Oriented JavaScript
*/


const CONFIG = [{
  href: '/',
  name: "Main",
}, {
  href: '/catalog',
  name: "Catalog",  
}, {
  href: '/gallery',
  name: "Gallery",
  items: [
    { href: 'gallery1', name: 'Gallery1' },
    { href: 'gallery2', name: 'Gallery2' },
    { href: 'gallery3', name: 'Gallery3' },
  ],
}];


class Container {
  remove() { document.getElementById(this.id).remove(); }
};


class Menu extends Container {
  static info() {
    console.log('show info');
  }

  constructor(id, config) {
    super();
    this.id = id;
    this.items = [];
    this.createItems(config)
  }

  createItems(config) {
    for (let i = 0; i < config.length; i++) {
      this.items.push(new MenuItem(config[i].href, config[i].name));
<<<<<<< HEAD
      if (config[i].items) {
        this.items.push(new Menu('submenu' + i, config[i].items))
      }
=======
      console.log(config[i])
>>>>>>> 314aa1bc95478fbfffbfce27729144a1d482441a
    }
  }

  create() {
    document.write(this.render());
  }

  render() {
    let result = `<ul id=${this.id}>`;

    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i].render();
    }

    result += '</ul>';
    return result;
  }
};

class MenuItem {
  constructor(href, name) {
    this.href = href;
    this.name = name;
  }

  render() {
    return `<li><a href='${this.href}'>${this.name}</a></li>`
  }
}

const menu = new Menu('main-menu', CONFIG);
menu.create();

