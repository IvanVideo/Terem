const headerBlock = document.querySelector('.header__block');
const block2 = document.querySelector('.section__block_2');
const popup = document.querySelector('.popup');

//скрываем первый блок при нажатии на "Кнопка1"
const hndleClickBtn1 = () => {
    headerBlock.classList.toggle('hide')
}

//меняем местами 1 и 2 блок при нажатии на "Кнопка1"
const hndleClickBtn2 = () => {
    // block2.css('order', 0)
    let order = block2
    console.log(order)
}

//закрываем попап
const hndleClosePopup = (e) => {
    if (e.target.classList == 'popup' || e.target.classList == 'popup__btn') {
        popup.classList.add('hide')
    }
    return
}

const btn1 = document.getElementById('btn1').addEventListener('click', hndleClickBtn1);
const btn2 = document.getElementById('btn2').addEventListener('click', hndleClickBtn2);
const popupCloseButton = document.querySelector('.popup__btn').addEventListener('click', hndleClosePopup);
popup.addEventListener('click', hndleClosePopup);
