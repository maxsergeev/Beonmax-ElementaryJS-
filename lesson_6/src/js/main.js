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
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', () => {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money === null || money === "") {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
})

// console.log(money);
// console.log(time);

// let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
// let answer2 = prompt("Во сколько обойдется?");
// let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
// let answer4 = prompt("Во сколько обойдется?");

//кнопка УТВЕРДИТЬ
expensesBtn.addEventListener('click', () => {
        let sum = 0;
        appData.chooseExpences(expensesItem, sum);
    })
    //кнопка УТВЕРДИТЬ необяз расходы
optionalExpensesBtn.addEventListener('click', () => {
    appData.chooseOptExpences(optionalExpensesItem);
});

countBudgetBtn.addEventListener('click', () => {
    if (appData.budget) {
        appData.detectDayBudget();
        appData.detectLevel();
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', (event) => {
    let income = event.target.value;
    appData.chooseIncome(income);
});

checkSavings.addEventListener('change', () => {
    if (appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if (appData.savings) {

    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.checkSavings(sum, percent);
    }
});
const appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false,
    chooseExpences: function(item, sum) {
        for (let i = 0; i < item.length; i++) {
            let a = item[i].value;
            let b = item[++i].value;
            if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expences[a] = b;
                sum += +b;
            } else {
                console.log("Данные не были сохранены, некорректный ввод!");
                i--;
            }
        };
        expensesValue.textContent = sum;
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Низкий уровень достатка'
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка'
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка'
        } else {
            levelValue.textContent = 'Ошибка'
        }
    },
    checkSavings: function(sum, percent) {
        if (appData.savings) {
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
            monthSavingsValue.textContent = appData.monthIncome;
            yearSavingsValue.textContent = appData.yearIncome;
        }
    },
    chooseOptExpences: function(item) {
        for (let i = 0; i < item.length; i++) {
            let optExpencesName = item[i].value;
            appData.optionalExpences[i] = optExpencesName;
            optionalExpensesValue.textContent += appData.optionalExpences[i] + ' ';
        }
    },
    chooseIncome: function(income) {
        appData.income = income.split(', ');
        // appData.income.push(prompt("Может что-то еще?"));
        incomeValue.textContent = appData.income + ' ';
    }
}