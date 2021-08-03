document.getElementById("btn").addEventListener('click', result)
function result() {
    const width = document.getElementById("width").value
    const length = document.getElementById("length").value
    const heigth = document.getElementById("heigth").value
    const showResult = document.getElementById("result")
    const out = document.getElementById('out')  
    let data
    let radio = document.querySelectorAll('.i-7')
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
        data=radio[i].value
        }
    }
        if (width < 0 || length < 0 || heigth < 0) {
            alert("Невірно вказаний розмір!!!")
        }
        if ((width==='0' && length==='0' && heigth==='0') || (width==='0' && length==='0') || (width==='0'&& heigth==='0') || (length==='0' && heigth==='0')) {
            alert("Розмір не може дорівнювати нулю!!!")
        }
        if ((width==='' && length==='' && heigth==='') || (width==='' && length==='') || (width===''&& heigth==='') || (length==='' && heigth==='')) {
            alert("Розмір не може дорівнювати нулю!!!")
        }
        if (!width) {
            showResult.innerHTML = "Загальна площа: " + (length * heigth).toFixed(2) + " м.кв."
            out.innerHTML = "Кількість рулонів: " + Math.ceil((length * heigth).toFixed(2)/data) + " шт."
        }
        if (!length) {
            showResult.innerHTML = "Загальна площа: " + (width * heigth).toFixed(2) +" м.кв."
            out.innerHTML = "Кількість рулонів: " + Math.ceil((width * heigth).toFixed(2)/data) + " шт."
        }
        if (!heigth) {
            showResult.innerHTML = "Загальна площа: "+(width * length).toFixed(2) +" м.кв."
            out.innerHTML = "Кількість рулонів: " + Math.ceil((width * length).toFixed(2)/data) + " шт."
        }
        if (width > 0 && length > 0 && heigth > 0) {
            showResult.innerHTML = "Загальна площа: " + (((width * heigth) + (length * heigth))).toFixed(2) * 2 + " м.кв."
            out.innerHTML = "Кількість рулонів: " + Math.ceil(((((width * heigth) + (length * heigth))).toFixed(2) * 2)/data) + " шт."
        }
}


