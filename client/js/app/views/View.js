class View {

    constructor(elemento){

        this.elemento = elemento;
    }

    _template(){

        throw new Error ('Método template deve ser implementado');
    }

    update(model){

        this.elemento.innerHTML = this._template(model);
    }
}