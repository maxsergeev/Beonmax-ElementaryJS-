let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


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
    chooseExpences: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings === true) {
            let save = +prompt("Какова сумма накоплений?");
            let percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Ваш доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },
    chooseOptExpences: function() {
        for (let i = 0; i < 3; i++) {
            let optExpencesName = prompt("Введите необязательную статью расходов");
            let optExpencesValue = prompt("Во сколько обойдется?");
            appData.optionalExpences[optExpencesName] = optExpencesValue;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }
}