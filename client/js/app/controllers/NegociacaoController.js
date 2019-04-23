class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);//bind querySelector faz com que ele mantenha a associação ao "document", pois ele é um método do objeto "document" e só vai funcionar caso ele mantenha essa relação
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault(event);
        let data = new Date(...//cria objeto data '...'(spread operator) faz com que array receba parametros
            this._inputData.value
            .split('-')//separa a data em array a cada '-'
            .map((item, indice)=>{//recebe item = item do array e indice = numero do local do item do array
                if(indice === 1){//procura a posição 1 do array(dia(0), mes(1),  ano(2))
                    return item - 1; //decrementa o item do array
                }
                return item;
            })
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    };

}