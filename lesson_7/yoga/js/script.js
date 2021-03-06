window.addEventListener('DOMContentLoaded', function() {
    //tabs

    window.addEventListener("DOMContentLoaded", () => {
        `use strict`;
        let tab = document.querySelectorAll('.info-header-tab');
        let info = document.querySelector('.info-header')
        let tabContent = document.querySelectorAll('.info-tabcontent');


        const hideTabContent = (a) => {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        const showTabContent = (b) => {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', (event) => {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target === tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        })
    })

    //timer

    let deadline = '2022-06-30';

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / 1000 / 60 / 60));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
        }
    }

    const setClock = (clockName, endTime) => {
        let timer = document.getElementById(clockName);
        let seconds = timer.querySelector('.seconds');
        let minutes = timer.querySelector('.minutes');
        let hours = timer.querySelector('.hours');


        const updateTime = () => {
            let t = getTimeRemaining(endTime);
            seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;
            minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
            hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;

            if (t.total <= 0) {
                clearInterval(interval);
                seconds.textContent = "00";
                minutes.textContent = "00";
                hours.textContent = "00";
            }
        }
        let interval = setInterval(updateTime, 1000);

    }

    setClock('timer', deadline);

    //modal
    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let closeBtn = document.querySelector('.popup-close');

    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    const openModal = () => {
        let descriptionBtn = document.querySelectorAll('.description-btn');
        descriptionBtn.forEach((item) => {
            item.addEventListener('click', () => {
                overlay.style.display = 'block';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';
            });
        })
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    openModal();

    //form send
    let message = {
        loading: '????????????????...',
        success: '??????????????! ?????????? ???? ?? ???????? ????????????????!',
        error: '??????-???? ?????????? ???? ??????'
    }

    let form = document.querySelector('.main-form');
    let contactsForm = document.querySelector('form');

    let input = document.getElementsByTagName('input');
    //contacts-form

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('satus');

    const sendForm = (element) => {
        element.addEventListener('submit', (e) => {
            e.preventDefault();
            element.appendChild(statusMessage);

            let formData = new FormData(element);

            const postData = (data) => {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.onreadystatechange = () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.staus === 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    }

                    request.send(data);
                })
            }

            const clearInput = () => {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.error)
                .then(() => clearInput());

        })
    }

    sendForm(form);
    sendForm(contactsForm);

    //slider

    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    let dots = document.querySelectorAll('.dot');
    let dotsWrap = document.querySelector('.slider-dots');
    const showSlides = (number) => {
        if (number > slides.length) {
            slideIndex = 1;
        }
        if (number < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((slide) => slide.style.display = 'none');
        dots.forEach((dot) => dot.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
    showSlides(slideIndex);

    const nextSlide = (number) => {
        showSlides(slideIndex += number);
    }

    const currentSlide = (number) => {
        showSlides(slideIndex = number);
    }

    const prevSlide = (number) => {
        showSlides(slideIndex -= number);
    }

    nextBtn.addEventListener('click', () => nextSlide(1))
    prevBtn.addEventListener('click', () => nextSlide(-1))

    dotsWrap.addEventListener('click', (e) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    })

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),

        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;
    persons.addEventListener('change', (e) => {
        personsSum = e.target.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', (e) => {
        daysSum = e.target.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == "" || persons.value == "" || restDays.value == 0 || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', (e) => {
        if (restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * e.target.options[e.target.selectedIndex].value;
        }
    })
});