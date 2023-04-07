let gridBaseHeight = 16;
let gridBaseWidth = 16;
let gridHeight = gridBaseHeight;
let gridWidth = gridBaseWidth;
for(i = 0; i < gridHeight; i++){
    for(j=0; j < gridWidth ; j++){
        //criar uma div "filha" ate chegar no final da tela
        const mainDiv = document.querySelector('#mainDiv');
        const divC = document.createElement('div');
        divC.classList.add('childDiv');
        divC.setAttribute('style', 'border: 2px solid black');
        mainDiv.appendChild(divC);
    }
}

//Hover


//Botao com prompt de gridWidth e gridHeight