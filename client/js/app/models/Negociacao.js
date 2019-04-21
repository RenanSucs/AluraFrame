class Negociacao{
    constructor(data, quantidade, valor){//underline permite apenas que os metodos da classe modifiquem o objeto, ninguem de fora consegue
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    };

    getVolume(){
        return this._quantidade * this._valor;
    };

    getData(){
        return this._data;
    };

    getQuantidade(){
        return this._quantidade;
    };

    getValor(){
        return this._valor;
    };
}