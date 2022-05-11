var porcent = document.querySelector('.porcent');
var paragrafo = document.querySelector('.paragrafo');
var loading = document.querySelector('.loading');
var count = 4;
var load = setInterval(animate, 36);

function animate(){
    if(count == 100){
        clearInterval(load);
        paragrafo.innerHTML= 'SEUS DADOS FORAM ROUBADOS <br> COM SUCESSO'
        porcent.innerHTML= '100% <br> Completo!'

        

    }
    else{
        ++count
        porcent.textContent = count + '%';
    }
}