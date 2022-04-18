export class Produto {
    constructor(nome, identificacao, valor, checado) {
        this._nome = nome;
        this._id = identificacao;
        this._checado = checado;
        this._valor = valor;
        
    }

    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        return this._nome = novoNome;
    }
    
    get identificacao() {
        return this._id
    }
    set identificacao(novoId) {
        return this._id = novoId;
    }

    get valor() {
        return this._valor;
    }
    set valor(novoValor) {
        return this._valor = novoValor;
    }

    get checado() {
        return this._checado;
    }
    set checado(novoChec) {
        this._checado = novoChec;
    }

    
}