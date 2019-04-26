class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instanciado');
    }

    //static faz com que o método seja acessado sem precisar instanciar a classe
    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`; //TEMPLATE STRING envolver a variável ou o método por `${}` concatena os elementos
    }
    
    static textoParaData(texto){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)){
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }

        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }

}