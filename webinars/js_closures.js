// JavaScript Closure Example


let a = 'a';

function one() {
  return function two() {
    return a;
  }
}

// console.log(one()())


// Imidiate Invoked Function Expression (IIFE)
const text = (function() {
  return 'Hello';
})();

// console.log(text)


// Counter

const counter = (function() {
  let current = 0;
  return {
    next: function() {
      current++;
      return current;
    },
    previous: function() {
      current--;
      return current;
    },
    clear: function() {
      return current = 0;
    }
  }
})();

// console.log(counter.next())
// console.log(counter.next())
// console.log(counter.next())
// console.log(counter.next())
// console.log(counter.previous())
// console.log(counter.previous())
// console.log(counter.clear())


// String Divider

const divider = function(str) {
  let words = str.split(' ')
  return {
    addWords: function() {
      return words.concat();
    }
  }
}

let stringDivider = divider('My long string');
// console.log(stringDivider.addWords());


// Make your own $ bycicle

const $ = function(selector) {
  let elements = document.querySelectorAll(selector);
  let methods = {
    css: function(property, value) {
      elements.forEach(elem => elem.style[property] = value);
      return this;
    },
    hide: function() {
      elements.forEach(elem => elem.style['background-color'] = 'transparent')
      return this;
    }
    // show: function () {
    //   elements.forEach(elem => elem.style['display'] = 'block')
    // }
  }
  return methods;
}

// setTimeout(function () { $('body').css('background', 'darksalmon') }, 2000);
// setTimeout(function () { $('body').hide() }, 4000);
// setTimeout($('body').show, 6000);


// Program settings
const settingsCollection = function(set) {
  let defaultSettings = {
    two: '2'
  };

  let current = {...defaultSettings, ...set};

  return {
    get: function(key) {
      return current[key]
    }
  }
}

let settings = settingsCollection({one:'1', two:'200'})

// console.log(settings.get('one'))
// console.log(settings.get('two'))


// Private method for div creation
const helper = (function() {
  let createHeader = function(text) {
    let element = document.createElement('div');
    element.innerHTML = text;
    return element;
  }

  return {
    addHeader: function(text) {
      document.body.appendChild(createHeader(text));
    }
  }
})();

// helper.addHeader('uno')
// helper.addHeader('dos')


// Closure variables could be changed during execution
const aligner = function() {
  let elements = [];

  return {
    add: function(element) {
      elements.push(element);
    },
    move: function() {
      elements.forEach(el => {
        el.style.marginLeft = parseInt(el.style.marginLeft || 0) + 1;
      })
    }
  }
};

let align = aligner();

setInterval(align.move, 200)

align.add(document.getElementById('uno'));
align.add(document.getElementById('dos'));

setInterval(function() {
  let element = document.createElement('div');
  element.innerHTML = 'tres';

  document.body.appendChild(element);
  align.add(element)
}, 3000)

