document.getElementById("btn").addEventListener('click', result)
function result() {
    const width = document.getElementById("width").value
    const depth = document.getElementById("depth").value
    const heigth = document.getElementById("heigth").value
    const showResult = document.getElementById("result")
    const out = document.getElementById('out')  
    let data
    let radio = document.querySelectorAll('.i-7')
    for (let i=0; i<radio.length; i++) {
        if(radio[i].checked) {
        data=radio[i].value
        }
    }
        if(width<0 || depth<0 || heigth<0) {
            alert("Невірно вказаний розмір!!!")
        }
        if((width==='0' && depth==='0' && heigth==='0') || (width==='0' && depth==='0') || (width==='0'&& heigth==='0') || (depth==='0' && heigth==='0')) {
            alert("Розмір не може дорівнювати нулю!!!")
        }
        if((width==='' && depth==='' && heigth==='') || (width==='' && depth==='') || (width===''&& heigth==='') || (depth==='' && heigth==='')) {
            alert("Розмір не може дорівнювати нулю!!!")
        }
        if(width==='' || width==='0') {
            showResult.innerHTML = "Загальна площа: "+(depth*heigth).toFixed(2) +" м.кв."
            out.innerHTML = "Кількість рулонів: "+Math.ceil((depth*heigth).toFixed(2)/data) + " шт."
        }
        if(depth==='' || depth==='0') {
            showResult.innerHTML = "Загальна площа: "+(width*heigth).toFixed(2) +" м.кв."
            out.innerHTML = "Кількість рулонів: "+Math.ceil((width*heigth).toFixed(2)/data) + " шт."
        }
        if(heigth==='' || heigth==='0') {
            showResult.innerHTML = "Загальна площа: "+(width*depth).toFixed(2) +" м.кв."
            out.innerHTML = "Кількість рулонів: "+Math.ceil((width*depth).toFixed(2)/data) + " шт."
        }
        if(width>0 && depth>0 && heigth>0) {
            showResult.innerHTML = "Загальна площа: "+(((width*heigth)+(depth*heigth))).toFixed(2)*2+" м.кв."
            out.innerHTML = "Кількість рулонів: "+ Math.ceil(((((width*heigth)+(depth*heigth))).toFixed(2)*2)/data) + " шт."
        }
}


