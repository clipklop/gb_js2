/*
 * HW1 GB_JS2 : Object-Oriented JavaScript
*/


const config = [
  { href: '/', name: 'Main'},
  { href: '/catalog', name: 'Catalog' },
  { href: '/gallery', name: 'Gallery', items: [
    { href: 'gallery1', name: 'Gallery1' },
    { href: 'gallery2', name: 'Gallery2' },
    { href: 'gallery3', name: 'Gallery3' },
  ]},
];


class Container {
  remove() {
    document.getElementById(this.id).remove();
  }
};


class Menu extends Container {
  static info() {
    console.log('show info');
  }

  constructor(id, config) {
    super();
    this.id = id;
    this.items = [];
    this.createItems(config);
  }

  createItems(config) {
    for (let i = 0; i < config.length; i++) {
      this.items.push(new MenuItem(config[i].href, config[i].name))
      if (config[i].items) {
        this.items.push(new Menu('submenu' + i, config[i].items))
      }
    }
  }

  create() {
    document.write(this.render());
  }

  render() {
    let result = `<ul id='${this.id}'>\n`;

    for(let item in this.items){
      result += this.items[item].render();
    }

    result += "\n</ul>";
    return result;
  }
}