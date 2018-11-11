// Homework#1 JS#2


/*
  1. Улучшить базовый класс, добавив в него общий для всех метод remove(), который удаляет соответствующий DOM - узел.
  2. Создать наследника класса Menu – новый класс должен уметь строить меню со вложенными пунктами, т.е с подменю.Подсказка: главный секрет в обходе объекта пунктов меню и проверке типов.
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
}];


class Menu {
  constructor(config) {
    this.items = [];
    this.createItems(config)
  }

  createItems(config) {
    for (let i = 0; i < config.length; i++) {
      this.items.push(new MenuItem(config[i].href, config[i].name));
      console.log(config[i])
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

const menu = new Menu(CONFIG);
menu.create();


/*
3. * Некая сеть фастфудов предлагает несколько видов гамбургеров:
** - маленький(50 рублей, 20 калорий);**
  - большой(100 рублей, 40 калорий).
Гамбургер может быть с одним из нескольких видов начинок(обязательно):
** - сыром(+ 10 рублей, + 20 калорий);**
** - салатом(+ 20 рублей, + 5 калорий);**
  - картофелем(+ 15 рублей, + 10 калорий).
* Дополнительно, гамбургер можно посыпать приправой(+ 15 рублей, 0 калорий) и полить майонезом(+ 20 рублей, + 5 калорий). *
  Напишите программу, рассчитывающую стоимость и калорийность гамбургера.Используйте ООП подход(подсказка: нужен класс Гамбургер, константы, методы для выбора опций и расчета нужных величин).
*/