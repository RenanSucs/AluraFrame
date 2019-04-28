class ListaNegociacoes{

    constructor(){

        this._negociacoes = [];
    }

    adiciona(negociacao){
        
        this._negociacoes.push(negociacao);
    }

    esvazia(){

        this._negociacoes = [];
    }

    get negociacoes(){
        
        return [].concat(this._negociacoes);//retorna a concatenação do array vazio com uma nova negociacao
    }
}