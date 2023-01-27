function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido!');
    }
}

const ListadeTeclas = document.querySelectorAll('.tecla');


//while(contador<listadeTeclas.length){}
for (let contador = 0; contador < ListadeTeclas.length; contador++){

    const tecla = ListadeTeclas[contador];
    const instrumento = tecla.classList[1];

    //console.log(instrumento);

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    //console.log(contador);
    //contador = contador + 1;

    tecla.onkeydown = function(evento){

        console.log(evento.code);

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}