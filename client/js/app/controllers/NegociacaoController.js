class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);//bind querySelector faz com que ele mantenha a associação ao "document", pois ele é um método do objeto "document" e só vai funcionar caso ele mantenha essa relação
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        
        event.preventDefault(event);
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso!';
        this._mensagemView.update(this._mensagem);
        
        this._limpaCampos();
    };

    _criaNegociacao(){

        return new Negociacao(
            
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaCampos(){//underline só pode chamar método pelo negociacao contorller, apenas por essa classe
        
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

}




    
 /*let data = new Date(...//cria objeto data '...'(spread operator) faz com que array receba parametros
            this._inputData.value
            .split('-')//separa a data em array a cada '-'
            .map((item, indice)=>{//recebe item = item do array e indice = numero do local do item do array
                if(indice === 1){//procura a posição 1 do array(dia(0), mes(1),  ano(2))
                    return item - 1; //decrementa o item do array
                }
                return item;
            })
        );*/

