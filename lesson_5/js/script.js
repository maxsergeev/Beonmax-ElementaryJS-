let menu = document.querySelector('.menu');
let menuItem = document.getElementsByClassName('menu-item');

let li = document.createElement('li')

//Добпаление 5го пункта и смена местами 2го и 3го пунктов
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
menu.appendChild(li);

menu.insertBefore(menuItem[1], menuItem[3]);

//смена заголовка
let title = document.getElementById('title');
title.innerHTML = "Мы продаем только подлинную технику Apple"

//замена картинки
let bg = './img/apple_true.jpg';
document.body.style.background = `url(${bg}) no-repeat center`;

//удаление рекламы
document.querySelector('.column > .adv').remove();

//задаем вопрос
let question = prompt("Как вы относитесь к технике Apple?")
let promptOut = document.getElementById('prompt')
promptOut.innerHTML = question;