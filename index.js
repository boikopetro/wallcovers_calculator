document.getElementById("btn").addEventListener('click', result)
function result() {
    const width = document.getElementById("width").value
    const depth = document.getElementById("depth").value
    const heigth = document.getElementById("heigth").value
    const showResult = document.getElementById("result")
        if(width<0 || depth<0 || heigth<0) {
            alert("Невірно вказаний розмір!!!")
        }
        if(width==='0' & depth==='0' & heigth==='0') {
            alert("Розмір не може дорівнювати нулю!!!")
        }
        if(width==='' || width==='0') {
            showResult.innerHTML = "Загальна площа: "+(depth*heigth).toFixed(2) +" м.кв."
        }
        if(depth==='' || depth==='0') {
            showResult.innerHTML = "Загальна площа: "+(width*heigth).toFixed(2) +" м.кв."
        }
        if(heigth==='' || heigth==='0') {
            showResult.innerHTML = "Загальна площа: "+(width*depth).toFixed(2) +" м.кв."
        }







        if(width>0 && depth>0 && heigth>0) {
            showResult.innerHTML = "Загальна площа: "+(((width*heigth)+(depth*heigth))).toFixed(2)*2+" м.кв."
        }
       
    

    
    
}

