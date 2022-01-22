const myForm = document.querySelector('.form');
const bodyPlace = document.querySelector('.info');

//сабмитим форму
const handleSubmitForm = (e) => {
    e.preventDefault()
    let formValues = {
        numberPlaer: myForm.elements.numberPlaer.value,
        numberPlayers: myForm.elements.numberPlayers.value,
        numperSpare: myForm.elements.numperSpare.value,
        numberWin: myForm.elements.numberWin.value,
        numberLos: myForm.elements.numberLos.value,
        textarea1: myForm.elements.textarea1.value,
        textarea2: myForm.elements.textarea2.value
    }
    let info = `
    <div class="info__box">
    <p class="info__title">№ участника</P>
    <p class="class1"> ${formValues.numberPlaer} </p> 
    </div>
    <div class="info__box">
    <p class="info__title">Количество игроков</P>
    <p class="class1"> ${formValues.numberPlayers} </p> 
    </div>
    <div class="info__box">
    <p class="info__title">Количество на замене</P>
    <p class="class1"> ${formValues.numperSpare} </p> 
    </div>
    <div class="info__box">
    <p class="info__title">Побед</P>
    <p class="class1"> ${formValues.numberWin} </p> 
    </div>
    <div class="info__box">
    <p class="info__title">Поражений</P>
    <p class="class1"> ${formValues.numberLos} </p> 
    </div>
    <div class="info__box">
    <p class="info__title">Что-то</P>
    <p class="class1"> ${formValues.textarea1} </p> 
    </div>
    <div class="info__box">
    <p class="info__title">Что-то</P>
    <p class="class1"> ${formValues.textarea2} </p> 
    </div>
    `
        ;
    bodyPlace.innerHTML += info;
    postDataValues(formValues)
}

const postDataValues = (data) => {
    alert('Будем считать, что все ушло на бэк)')
    return fetch(`https://myserver`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            numberPlaer: data.numberPlaer,
            numberPlayers: data.numberPlayers,
            numperSpare: data.numperSpare,
            numberWin: data.numberWin,
            numberLos: data.numberLos,
            textarea1: data.textarea1,
            textarea2: data.textarea2,
        }),
    }).then((res) => {
        return res.ok
            ? res.json()
            : Promise.reject(
                new Error(`Ошибка ${response.status} : ${response.statusText}`)
            );
    })
}

//слушатели событий
myForm.addEventListener('submit', handleSubmitForm);