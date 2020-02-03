function adicionarHttp(url) {
    return ("http://" + url)
}

function processar(sites, funcao){
    let array = [ ];
    for(let i = 0; i<sites.length; i++){
        array[i] = funcao(sites[i]); 
    }
    console.log (array);
}

processar(["www.google.com","www.yahoo.com"], adicionarHttp)