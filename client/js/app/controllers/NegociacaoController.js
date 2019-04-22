class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);//bind querySelector faz com que ele mantenha a associação ao "document", pois ele é um método do objeto "document" e só vai funcionar caso ele mantenha essa relação
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault(event);
        let negociacao = new Negociacao(//passando paramentros para a função negociacao
            this._inputData.value,
            this._inputQuantidade,
            this._inputValor
        )
    };

}