let money = +prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DD")
    // console.log(money);
    // console.log(time);

// let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
// let answer2 = prompt("Во сколько обойдется?");
// let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
// let answer4 = prompt("Во сколько обойдется?");

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExenses: {},
    income: [],
    savings: false,
}

//----FOR CYCLE----//
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
//     if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Данные не были сохранены, некорректный ввод!");
//         i--;
//     }
// };

//----WHILE CYCLE----//
// let i = 0;
// while (i < 2) {
//     console.log(i);
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
//     if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     } else {
//         console.log("error");
//     }
//     console.log(i);
// }

//----DO_WHILE CYCLE----//
let i = 0;
do {
    console.log(i);
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");
    if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        i++;
    } else {
        console.log("error");
    }
    console.log(i);
} while (i < 2)

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}