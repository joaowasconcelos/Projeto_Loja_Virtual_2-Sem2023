const Pessoa = require('./Pessoa');
const Cliente = require('./Cliente');


class Adm extends Pessoa {
    #permissao
    #funcionario
    #verify

    constructor (nome,cpf,DataNasc,Email,Senha) {
        super (nome,cpf,DataNasc,Email,Senha)
        this.#permissao = true;
        this.#funcionario = true;
        this.#verify = new.target
    }
    
}