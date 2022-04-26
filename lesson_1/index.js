let money = prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DD")
console.log(money);
console.log(time);

let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");
let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
let answer4 = prompt("Во сколько обойдется?");

const appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExenses: {},
    income: [],
    savings: false,
}

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

const bugetForDay = appData.money / 30;
alert(bugetForDay);