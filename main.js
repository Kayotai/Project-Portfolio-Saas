let mood_the_day = [document.getElementById("yes"), document.getElementById("no")];

mood_the_day.forEach((radio) => {
    radio.addEventListener("change",() => {
        if (radio.checked)
        {
            console.log(`Selecionado ${radio.value}`);
        }
    })
})
