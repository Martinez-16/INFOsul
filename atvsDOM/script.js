let titulo = document.getElementById('titulo')
let subtitulo = document.getElementsByClassName('subtitulo')
let paragrafo = document.getElementsByTagName('p')
let item = document.getElementsByTagName('li')

titulo.style.color = 'blue'
titulo.style.fontSize = '40px'
titulo.style.textAlign = 'center'
titulo.style.textTransform = 'uppercase'

for(let n = 0; n < subtitulo.length; n++){
    subtitulo[n].style.color = 'red'
    subtitulo[n].style.fontStyle = 'italic'
    subtitulo[n].style.letterSpacing = '3px'
    subtitulo[n].style.textDecoration = 'underline'
}

for(let i = 0; i < paragrafo.length; i++){
    paragrafo[i].style.indent = '20px'
    paragrafo[i].style.lineHeight = '1.5'
    paragrafo[i].style.textAlign = 'justify'
    paragrafo[i].style.fontFamily = 'Arial, sans-serif'
}

for(let i = 0; i < item.length; i++){
    item[i].style.color = 'green'
    item[i].style.fontSize = '20px'
    item[i].style.fontWeight = 'bold'
}