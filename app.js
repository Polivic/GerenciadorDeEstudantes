const readline = require('readline-sync');

let estudantes = []; // Array para armazenar os estudantes

// Valida se todas as notas estão entre 0 e 10
function validarNotas(notas) {
    return notas.every((nota) => !isNaN(nota) && nota >= 0 && nota <= 10);
}

// Busca um estudante pelo nome (case insensitive)
function buscarEstudantePorNome(nome) {
    return estudantes.find((estudante) => estudante.nome.toLowerCase() === nome.toLowerCase());
}

// Cadastra um novo estudante no array
function cadastrarEstudante() {
    const nome = readline.question("Nome do estudante: ").trim();
    if (!nome) {
        console.log("Nome não pode ser vazio.");
        return;
    }

    const idade = parseInt(readline.question("Idade: "));
    if (isNaN(idade) || idade <= 0) {
        console.log("Idade inválida.");
        return;
    }

    // Recebe as notas separadas por vírgula e converte para float
    let notas = readline
        .question("Digite as notas separadas por vírgula: ")
        .split(",")
        .map((nota) => parseFloat(nota.trim())); 

    if (!validarNotas(notas)) {
        console.log("As notas devem estar entre 0 e 10.");
        return;
    }

    estudantes.push({ nome, idade, notas });
    console.log("Estudante cadastrado com sucesso!");
}

// Remove um estudante pelo nome
function removerEstudante(nome) {
    const antes = estudantes.length;
    estudantes = estudantes.filter(
        (estudante) => estudante.nome.toLowerCase() !== nome.toLowerCase()
    );
    if (estudantes.length < antes) {
        console.log(`Estudante ${nome} removido.`);
    } else {
        console.log(`Estudante ${nome} não encontrado.`);
    }
}

// Atualiza as notas de um estudante
function atualizarNotas(nomeDoEstudante) {
    let estudante = buscarEstudantePorNome(nomeDoEstudante);
    if (estudante) {
        let novasNotas = readline
            .question("Digite as novas notas separadas por vírgula: ")
            .split(",")
            .map((nota) => parseFloat(nota.trim()));

        if (!validarNotas(novasNotas)) {
            console.log("Notas inválidas.");
            return;
        }
        estudante.notas = novasNotas;
        console.log("Notas atualizadas com sucesso!");
    } else {
        console.log("Estudante não encontrado.");
    }
}

// Calcula a média das notas de um estudante
function calcularMedia(notas) { 
    let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0); 
    return soma / notas.length;
}

// Calcula a média da turma
function calcularMediaTurma(estudantes) { 
    let somaMedias = estudantes.reduce((acumulador, estudante) => acumulador + calcularMedia(estudante.notas), 0); 
    return somaMedias / estudantes.length; 
}

// Calcula a média individual de um estudante pelo nome
function calcularMediaIndividual(nome) { 
    let estudante = buscarEstudantePorNome(nome); 
    if (estudante) { 
        return calcularMedia(estudante.notas); 
    } else { 
        return null; 
    } 
}

// Exibe todos os estudantes cadastrados com suas médias
function exibirEstudantes() {
    if (estudantes.length === 0) {
        console.log("\nNenhum estudante cadastrado.");
        return;
    }

    estudantes.forEach((estudante) => {
        let media = calcularMedia(estudante.notas);
        console.log(
            `Nome: ${estudante.nome}, Idade: ${estudante.idade}, Média: ${media.toFixed(
                2
            )}`
        );
    });
}

// Exibe a média geral da turma
function exibirMediaTurma() {
    if (estudantes.length === 0) {
        console.log("\nNenhum estudante cadastrado.");
        return;
    }
    let mediaTurma = calcularMediaTurma(estudantes);
    console.log(`\nMédia da Turma: ${mediaTurma.toFixed(2)}`);
}

// Exibe a média individual de um estudante
function exibirMediaIndividual(nome) {
    let media = calcularMediaIndividual(nome);
    if (media !== null) {
        console.log(`\n Média de ${nome}: ${media.toFixed(2)}`);
    } else {
        console.log(`Estudante ${nome} não encontrado.`);
    }
}

// Busca estudantes pelo nome ou parte do nome
function buscarEstudante() {
    const termo = readline.question("Digite o nome ou parte do nome: ").toLowerCase();
    const resultados = estudantes.filter((estudante) =>
        estudante.nome.toLowerCase().includes(termo)
    );

    if (resultados.length === 0) {
        console.log("Nenhum estudante encontrado.");
        return;
    }

    resultados.forEach((estudante) => {
        console.log(
            `${estudante.nome} - Média: ${calcularMedia(estudante.notas).toFixed(2)}`
        );
    });
}

// Lista estudantes por situação: aprovado, recuperação ou reprovado
function listarEstudantes() {
    if (estudantes.length === 0) {
        console.log("\nNenhum estudante cadastrado.");
        return;
    }

    console.log("\nEstudantes Aprovados (média maior ou igual a 7):");
    estudantes
        .filter((estudante) => calcularMedia(estudante.notas) >= 7)
        .forEach((estudante) =>
            console.log(`${estudante.nome} - Média: ${calcularMedia(estudante.notas).toFixed(2)}`)
        );

    console.log("\nEstudantes em Recuperação (média entre 5 e 6.9):");
    estudantes
        .filter((estudante) => calcularMedia(estudante.notas) >= 5 && calcularMedia(estudante.notas) < 7)
        .forEach((estudante) =>
            console.log(`${estudante.nome} - Média: ${calcularMedia(estudante.notas).toFixed(2)}`)
        );

    console.log("\nEstudantes Reprovados (média menor que 5):");
    estudantes
        .filter((estudante) => calcularMedia(estudante.notas) < 5)
        .forEach((estudante) =>
            console.log(`${estudante.nome} - Média: ${calcularMedia(estudante.notas).toFixed(2)}`)
        );
}

// Encontra e exibe o estudante com maior média
function estudanteComMaiorMedia() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return null;
    }

    let melhorEstudante = estudantes[0];
    estudantes.forEach((estudante) => {
        if (calcularMedia(estudante.notas) > calcularMedia(melhorEstudante.notas)) {
            melhorEstudante = estudante;
        }
    });

    console.log(
        `Melhor estudante: ${melhorEstudante.nome} - Média: ${calcularMedia(melhorEstudante.notas).toFixed(2)}`
    );
    return melhorEstudante;
}

// Encontra e exibe o estudante com menor média
function estudanteComMenorMedia() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return null;
    }

    let piorEstudante = estudantes[0];
    estudantes.forEach((estudante) => {
        if (calcularMedia(estudante.notas) < calcularMedia(piorEstudante.notas)) {
            piorEstudante = estudante;
        }
    });

    console.log(
        `Pior estudante: ${piorEstudante.nome} - Média: ${calcularMedia(piorEstudante.notas).toFixed(2)}`
    );
    return piorEstudante;
}

// Menu principal do sistema
function menu() {
    let opcao;
    do {
        console.log(`
        --- MENU ---
        1. Cadastrar estudante
        2. Listar estudantes
        3. Buscar estudante
        4. Exibir média da turma
        5. Exibir média individual
        6. Atualizar notas
        7. Remover estudante
        8. Relatórios
        9. Estudante com maior média
        10. Estudante com menor média
        0. Sair
    `);

        opcao = readline.question("Escolha uma opcao: ");

        switch (opcao) {
            case "1":
                cadastrarEstudante();
                break;
            case "2":
                exibirEstudantes();
                break;
            case "3":
                buscarEstudante();
                break;
            case "4":
                exibirMediaTurma();
                break;
            case "5":
                const nome = readline.question("Nome do estudante: ");
                exibirMediaIndividual(nome);
                break;
            case "6":
                const nomeUpdate = readline.question("Nome do estudante: ");
                atualizarNotas(nomeUpdate);
                break;
            case "7":
                const nomeRemove = readline.question("Nome do estudante: ");
                removerEstudante(nomeRemove);
                break;
            case "8":
                listarEstudantes();
                break;
            case "9":
                estudanteComMaiorMedia();
                break;
            case "10":
                estudanteComMenorMedia();
                break;
            case "0":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== "0");
}

menu();
