# Gerenciador de Estudantes

Este projeto é um sistema simples em **JavaScript** para gerenciar estudantes, suas idades e notas. Ele permite cadastrar, listar, buscar, atualizar, remover estudantes, calcular médias individuais e da turma, além de identificar o melhor e o pior aluno.

---

## Funcionalidades

* Cadastrar estudantes com nome, idade e notas.
* Listar todos os estudantes com suas médias.
* Buscar estudantes pelo nome ou parte do nome.
* Atualizar as notas de um estudante.
* Remover estudantes.
* Exibir a média da turma.
* Exibir a média individual de um estudante.
* Listar estudantes aprovados, em recuperação e reprovados.
* Identificar o estudante com maior média.
* Identificar o estudante com menor média.

---

## Tecnologias Utilizadas

* JavaScript (Node.js)
* [readline-sync](https://www.npmjs.com/package/readline-sync) para entrada de dados pelo terminal.

---

## Pré-requisitos

* Node.js instalado no computador
* npm (gerenciador de pacotes do Node.js)

---

## Instalação

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Acesse a pasta do projeto:

```bash
cd GerenciadorDeEstudantes
```

3. Instale a dependência:

```bash
npm install readline-sync
```

---

## Execução

Para executar o programa, use o comando:

```bash
node app.js
```

O sistema exibirá um menu interativo com as opções disponíveis.

---

## Uso

O menu interativo permite escolher as seguintes opções:

1. **Cadastrar estudante**: Insira nome, idade e notas.
2. **Listar estudantes**: Mostra todos os estudantes cadastrados com suas médias.
3. **Buscar estudante**: Procura por estudantes pelo nome ou parte do nome.
4. **Exibir média da turma**: Calcula e exibe a média de todos os estudantes.
5. **Exibir média individual**: Exibe a média de um estudante específico.
6. **Atualizar notas**: Permite atualizar as notas de um estudante.
7. **Remover estudante**: Remove um estudante pelo nome.
8. **Relatórios**: Lista estudantes aprovados, em recuperação e reprovados.
9. **Estudante com maior média**: Exibe o estudante com a maior média.
10. **Estudante com menor média**: Exibe o estudante com a menor média.
11. **Sair**: Encerra o programa.

---

## Observações

* As notas devem estar entre 0 e 10.
* O programa não possui persistência de dados; ao encerrar, os registros são perdidos.
* Recomenda-se inserir nomes corretos para facilitar a busca e atualização de dados.

---

