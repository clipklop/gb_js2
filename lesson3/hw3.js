// Homework#3 JS#2


// 1
const textReplace = () => {
  let text = "Этот 'текст необходимо' замени'ть с помощью 'регулярных' выражен'ий";
  let result = text.replace(/[']/g, '"');
  return result;
}


// 2
const textReplace2 = () => {
  let pattern = /([а-яё])"([а-яё])/g;
  let result = result.replace(pattern, "$1'$2");
  return result;
}


// 3
const validateForm = () => {
  let validateBlock = document.getElementById('validationName');
  validName(validateBlock, setClass);
  validateBlock = document.getElementById('validationPhone');
  validPhone(validateBlock, setClass);
  validateBlock = document.getElementById('validationEmail');
  validEmail(validateBlock, setClass);
}

const setClass = (block, res) => {
  return res ? block.setAttribute('class', 'form-control is-valid') : block.setAttribute('class', 'form-control is-invalid');
}

const validName = (name, callback) => {
  let regextp = /^[A-Za-zА-Яа-я]+$/;
  return callback(name, regextp.test(name.value));
}

const validPhone = (phone, callback) => {
  let regextp = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
  return callback(phone, regextp.test(phone.value));
}

const validEmail = (email, callback) => {
  let regextp = /^\w+[\.-]?\w*@\w+\.[A-Za-zА-Яа-я]+$/;
  return callback(email, regextp.test(email.value));
}