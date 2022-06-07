let btn = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a');
// btn[0].onclick = () => {
//     alert('Вы нажали первую кнопку!');
// };

// btn[0].onclick = () => {
//     alert('Вы опять первую кнопку!');
// };

// btn[0].addEventListener('click', (event) => {
//     // console.log(event);
//     // let target = event.target;
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
//     // target.style.display = 'none';
// });

// wrap.addEventListener('click', () => {
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target)
// });

link.addEventListener('click', (event) => {
    event.preventDefault(event);
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target)
});

btn.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        console.log("Вышли !");
    })
});