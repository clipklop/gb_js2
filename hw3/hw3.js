// JavaScript RegExp Lesson 3


// 1. У вас есть большой текст, в котором для обозначения диалогов используются одинарные
// кавычки.Придумать шаблон, который меняет одинарные кавычки на двойные.
const text = "'Lorem ipsum dolor si't amet consectetur, adipisicing elit. Soluta, dolore hic aliquam cupiditate cum velit cumque ex exercitationem odit laudantium! Distinctio maiores ipsam, modi eaque quia consectetur suscipit voluptate ut!'"
console.log(text.replace(/"([^']+)"/g, "& lsquo;& lsquo; $1 & rsquo;& rsquo;"));


// 2. Улучшить шаблон таким образом, чтобы конструкции типа aren’t не меняли одинарную
// кавычку на двойную.


// 3. Создать форму обратной связи с полями: Имя, Телефон, e - mail, текст, кнопка «Отправить».
// При нажатии на кнопку «Отправить» произвести валидацию полей следующим образом:
//  a.Имя содержит только буквы;
//  b.Телефон подчиняется шаблону + 7(000)000 - 0000;
//  c.E - mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my - mail@mail.ru
//  d.Текст произвольный;
//  e.В случае не прохождения валидации одним из полей необходимо выделять это поле
//  красной рамкой и сообщать пользователю об ошибке.
