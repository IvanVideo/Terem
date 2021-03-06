const headerBlock = document.querySelector('.header__block');
const block2 = document.querySelector('.section__block_2');
const popup = document.querySelector('.popup');

//скрываем первый блок при нажатии на "Кнопка1"
const hndleClickBtn1 = () => {
    headerBlock.classList.toggle('hide')
}


//меняем местами 1 и 2 блок при нажатии на "Кнопка2"
const hndleClickBtn2 = () => {
    const block1 = document.querySelector('.section__block_1');
    if (block1.style.order == 1) {
        block1.style.order = 3
    } else {
        block1.style.order = 1
    }
}

//закрываем попап
const hndleClosePopup = (e) => {
    if (e.target.classList == 'popup' || e.target.classList == 'popup__btn') {
        popup.classList.add('hide')
    }
    return
}

//слушатели событий
const btn1 = document.getElementById('btn1').addEventListener('click', hndleClickBtn1);
const btn2 = document.getElementById('btn2').addEventListener('click', hndleClickBtn2);
const popupCloseButton = document.querySelector('.popup__btn').addEventListener('click', hndleClosePopup);
popup.addEventListener('click', hndleClosePopup);