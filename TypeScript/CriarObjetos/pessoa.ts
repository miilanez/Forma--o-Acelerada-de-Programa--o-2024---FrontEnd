//Criar um objeto com classes privadas, públicas e protegidas

class Pessoa {
    public nome: string;
    protected idade: number;
    private cpf: string;

    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    public apresentar(): string {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }

    protected mostrarIdade(): string {
        return `Idade: ${this.idade}`;
    }

    private mostrarCPF(): string {
        return `CPF: ${this.cpf}`;
    }

    public obterDados(): string {
        return `${this.apresentar()} ${this.mostrarIdade()} ${this.mostrarCPF()}`;
    }
}

class Estudante extends Pessoa {
    private matricula: string;

    constructor(nome: string, idade: number, cpf: string, matricula: string) {
        super(nome, idade, cpf);
        this.matricula = matricula;
    }

    public detalhes(): string {
        return `${this.apresentar()} ${this.mostrarIdade()} Matrícula: ${this.matricula}`;
    }
}

const pessoa = new Pessoa("João", 30, "123.456.789-00");
console.log(pessoa.apresentar());
console.log(pessoa.obterDados());

const estudante = new Estudante("Maria", 22, "987.654.321-00", "A1234");
console.log(estudante.detalhes());
