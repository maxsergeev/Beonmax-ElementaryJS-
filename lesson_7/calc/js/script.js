let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {

    const getData = () => {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.onreadystatechange = () => {
                // if (request.readyState < 4) {
                //     resolve();
                // }
                if (request.readyState === 4) {
                    if (request.status === 200 && request.status < 300) {
                        resolve(request.response);
                    } else {
                        reject(Error("Order nor send!!!"));
                    }
                }
            };
            request.send();
        });
    }

    getData()
        // .then(() => { console.log("В ожидании...") })
        .then((response) => {
            let data = JSON.parse(response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => {
            inputUsd.value = "Что-то пошло не так!";
        })
});