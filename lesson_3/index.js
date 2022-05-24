let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money === null || money === "") {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

// console.log(money);
// console.log(time);

// let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
// let answer2 = prompt("Во сколько обойдется?");
// let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
// let answer4 = prompt("Во сколько обойдется?");

const appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true,
}


function chooseExpences() { //запись расходов
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется?");
        if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expences[a] = b;
        } else {
            console.log("Данные не были сохранены, некорректный ввод!");
            i--;
        }
    };
}
chooseExpences();


function detectDayBudget() { //ежедневный бюджет
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() { //уровень достатка
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();


function checkSavings() { //функция на наличие сбережений
    if (appData.savings === true) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Ваш доход в месяц с вашего депозита:" + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpences() {
    for (let i = 0; i < 3; i++) {
        let optExpencesName = prompt("Введите необязательную статью расходов");
        let optExpencesValue = prompt("Во сколько обойдется?");
        appData.optionalExpences[optExpencesName] = optExpencesValue;
    }
}

chooseOptExpences();