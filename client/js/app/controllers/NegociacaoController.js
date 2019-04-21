class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);//bind querySelector faz com que ele mantenha a associação ao "document", pois ele é um método do objeto "document" e só vai funcionar caso ele mantenha essa relação
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor')
    }

    adiciona(event){
        event.preventDefault(event);
        console.log(this.inputData.value);
    };

}