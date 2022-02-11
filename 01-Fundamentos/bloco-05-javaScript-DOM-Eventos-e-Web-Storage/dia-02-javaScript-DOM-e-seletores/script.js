document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';
document.getElementById('primeiroFilho').innerText = 'Um texto a ele :)';
document.getElementById('pai').firstElementChild;
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
document.getElementById('elementoOndeVoceEsta').nextSibling;
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
document.getElementById('pai').lastElementChild.previousElementSibling;

let dad = document.getElementById('pai');
let brother = document.createElement('section');
dad.appendChild(brother);

let ondeEstou = document.getElementById('elementoOndeVoceEsta');
let filho = document.createElement('section');
filho.id = 'FilhoFilhoFilho'
ondeEstou.appendChild(filho);

let filho2 = document.createElement('section');
let filhoDoFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilhoDoFilho.appendChild(filho2);

document.getElementById('primeiroFilhoDoFilho').firstElementChild.parentElement.parentElement.nextElementSibling;

document.getElementById('primeiroFilho').remove();
document.getElementById('terceiroFilho').remove();
document.getElementById('quartoEUltimoFilho').remove();
document.getElementById('segundoEUltimoFilhoDoFilho').remove();

