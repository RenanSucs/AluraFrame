class Negociacao{
    constructor(data, quantidade, valor){//underline permite apenas que os metodos da classe modifiquem o objeto, ninguem de fora consegue
        this._data = new Date(data.getTime());//cria uma nova data para que esse valor nao seja alterado
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //congela o objeto para ele nao ser alterado após ser criado, porém ele é razo, não congela todas as propriedades desse objeto
    };

    get volume(){//utilizamos o get para que o método seja chamado em forma de propriedade. Exemplo: n1.volume/n1.quantidade - sempre vão referenciar o método criado aqui
        return this._quantidade * this._valor;
    };

    get data(){
        return new Date(this._data.getTime());//cria uma nova data para que esse valor nao seja alterado
    };

    get quantidade(){
        return this._quantidade;
    };

    get valor(){
        return this._valor;
    };
}

//ES6 trocar VAR por LET para que a variavel fique dentro apenas do escopo que ela foi criada, não pode ser acessada por fora daquele escopo
// for(let i = 1; i<=100; i++){
// console.log(i) //A VARIAVEL i EXISTE APENAS DENTRO DESSE BLOCO, POR CAUSA DO LET  
//}

