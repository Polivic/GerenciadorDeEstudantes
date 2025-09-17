let estudantes = [
    {
        nome: "João",
        idade: 20,
        notas: [7, 8, 9]
    },
    {
        nome: "Maria",
        idade: 22,
        notas: [9, 9, 10]
    },
    {
        nome: "Pedro",
        idade: 21,
        notas: [6, 7, 8]
    }
];

function calcularMedia(notas) {
    let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / notas.length;
}

function exibirEstudantes(estudantes) {
    estudantes.forEach(estudante => {
        let media = calcularMedia(estudante.notas);
        console.log(`Nome: ${estudante.nome}, Idade: ${estudante.idade}, Média: ${media.toFixed(2)}`);
    });
}

