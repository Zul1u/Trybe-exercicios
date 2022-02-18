window.onload = function () {
    // BackgroundColor
    let body = document.querySelector('body');
    let inpBgColor = document.querySelector('#bgcolor');
    inpBgColor.addEventListener('change', bgColor);
    function bgColor() {
        body.style.backgroundColor = inpBgColor.value;
        localStorage.setItem('bg-color', inpBgColor.value);
    }

    // Cor do Texto
    let CorDoTexto = document.querySelector('#colorText');
    CorDoTexto.addEventListener('change', textColor);

    function textColor() {
        document.body.style.color = CorDoTexto.value;
        localStorage.setItem('Cor-do-Texto', CorDoTexto.value);
    }

    //Tamanho da Fonte
    let bntFonte = document.querySelectorAll('#bnt-Txt>button')

    function setFontSize (size){
        let paragrafos = document.querySelectorAll('.paragrafo')
        for (let i = 0; i< paragrafos.length; i += 1) {
            paragrafos[i].style.fontSize = size
        }
        localStorage.setItem("fontSize", size)
    }
    for (let i = 0; i < bntFonte.length; i += 1){
        bntFonte[i].addEventListener('click', function(event){
            setFontSize(event.target.fontSize = bntFonte[i].innerText)
        })
    }

    //Espaço entre as linhas
    function setLineHeight(height) {
        let paragraphs = document.querySelectorAll(".paragrafo")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.lineHeight = height
        }
        localStorage.setItem("lineHeight", height)
    }
    let lineHeightButtons = document.querySelectorAll("#bnt-Espace>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
      lineHeightButtons[index].addEventListener("click", function(event) {
        setLineHeight(event.target.innerText)
      })
    }

    //Tipo de fonte
    let select = document.querySelector('#font')
        select.addEventListener('change', function(){
            let selected = select.selectedOptions[0]
            document.body.style.fontFamily = selected.value;

            localStorage.setItem('fontFamily', selected.value);
        })
    

    let savedBgColor = localStorage.getItem('bg-color');
    document.body.style.backgroundColor = savedBgColor;

    let savedTextColor = localStorage.getItem('Cor-do-Texto');
    document.body.style.color = savedTextColor; 

    let savedFontSize = localStorage.getItem('fontSize');
    let paragrafos = document.querySelectorAll('.paragrafo');
    for (let i = 0; i < paragrafos.length; i += 1) {
        paragrafos[i].style.fontSize = savedFontSize;
    }

    let savedHeight = localStorage.getItem('lineHeight');
    for (let i = 0; i < paragrafos.length; i += 1) {
        paragrafos[i].style.lineHeight = savedHeight;
    }

    let savedFontFamily = localStorage.getItem('fontFamily');
    document.body.style.fontFamily = savedFontFamily;
}