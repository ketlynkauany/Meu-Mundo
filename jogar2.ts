interface Mundo {
    bioma: string;
    clima: string;
    horario: string;
}

let mundos: Mundo[] = [];

function exibirMenu(): number {
    console.log("Meu Mundo - Minecraft");
    console.log("==========================");
    console.log("1. Criar Mundo");
    console.log("2. Listar Mundo");
    console.log("3. Atualizar Mundo");
    console.log("4. Excluir Mundo");
    console.log("5. Sair");
    let opcao = parseInt(prompt("Escolha a opção desejada:") || "0");
    while (isNaN(opcao) || opcao < 1 || opcao > 5) {
        console.log("Opção inválida, tente novamente.");
        opcao = parseInt(prompt("Escolha a opção desejada:") || "0");
    }
    return opcao;
}

function criarMundo(): Mundo {
    console.log("Criar meu mundo!");

    const biomas = [
        "Floresta Mista",
        "Floresta Florada",
        "Pântanos",
    ];

    console.log("Escolha o bioma ou digite o nome do seu próprio bioma:");
    biomas.forEach((bioma, index) => {
        console.log(`${index + 1}. ${bioma}`);
    });

    let opcaoBioma: string | null;
    let biomaEscolhido: string = '';
    let biomaValido = false;

    while (!biomaValido) {
        opcaoBioma = prompt("Digite o número do bioma ou escreva o seu bioma:");
        if (opcaoBioma && !isNaN(parseInt(opcaoBioma))) {
            const index = parseInt(opcaoBioma) - 1;
            if (index >= 0 && index < biomas.length) {
                biomaEscolhido = biomas[index];
                biomaValido = true;
            } else {
                console.log("Opção de bioma inválida, tente novamente.");
            }
        } else if (opcaoBioma && opcaoBioma.trim() !== "") {
            biomaEscolhido = opcaoBioma.trim();
            biomaValido = true;
        } else {
            console.log("Opção de bioma inválida, tente novamente.");
        }
    }

    const climas = ["Céu limpo", "Céu nublado", "Chovendo"];
    console.log("Escolha o clima:");
    climas.forEach((clima, index) => {
        console.log(`${index + 1}. ${clima}`);
    });

    let opcaoClima: number;
    let climaEscolhido: string = '';
    while (true) {
        opcaoClima = parseInt(prompt("Digite o número do clima:") || "0") - 1;
        if (opcaoClima >= 0 && opcaoClima < climas.length) {
            climaEscolhido = climas[opcaoClima];
            break;
        } else {
            console.log("Opção de clima inválida, tente novamente.");
        }
    }

    const horarios = ["Nascer do sol", "Manhã", "Tarde", "Por do sol", "Noite"];
    console.log("Escolha o horário:");
    horarios.forEach((horario, index) => {
        console.log(`${index + 1}. ${horario}`);
    });

    let opcaoHorario: number;
    let horarioEscolhido: string = '';
    while (true) {
        opcaoHorario = parseInt(prompt("Digite o número do horário:") || "0") - 1;
        if (opcaoHorario >= 0 && opcaoHorario < horarios.length) {
            horarioEscolhido = horarios[opcaoHorario];
            break;
        } else {
            console.log("Opção de horário inválida, tente novamente.");
        }
    }

    return {
        bioma: biomaEscolhido,
        clima: climaEscolhido,
        horario: horarioEscolhido
    };
}

function listarMundo(): void {
    if (mundos.length === 0) {
        console.log("Nenhum mundo foi criado ainda.");
    } else {
        console.log("\nMundos criados:");
        mundos.forEach((mundo, index) => {
            console.log(`Cadastro ${index + 1}:`);
            console.log(`Bioma: ${mundo.bioma}`);
            console.log(`Clima: ${mundo.clima}`);
            console.log(`Horário: ${mundo.horario}`);
            console.log("------------------------------");
        });
    }
}

function atualizarMundo(): void {
    if (mundos.length === 0) {
        console.log("Nenhum mundo foi criado ainda.");
        return;
    }

    console.log("\nEscolha o número do mundo que deseja atualizar:");
    mundos.forEach((mundo, index) => {
        console.log(`Cadastro ${index + 1}: ${mundo.bioma}`);
    });

    let numeroCadastro = parseInt(prompt("Digite o número do cadastro a ser atualizado:") || "0") - 1;
    while (isNaN(numeroCadastro) || numeroCadastro < 0 || numeroCadastro >= mundos.length) {
        console.log("Cadastro não encontrado. Tente novamente.");
        numeroCadastro = parseInt(prompt("Digite o número do cadastro a ser atualizado:") || "0") - 1;
    }

    const mundoAtualizado = criarMundo();
    mundos[numeroCadastro] = mundoAtualizado;
    console.log("\nMundo atualizado com sucesso!");
}

function excluirMundo(): void {
    if (mundos.length === 0) {
        console.log("Nenhum mundo foi criado ainda.");
        return;
    }

    console.log("\nEscolha o número do mundo que deseja excluir:");
    mundos.forEach((mundo, index) => {
        console.log(`Cadastro ${index + 1}: ${mundo.bioma}`);
    });

    let numeroCadastro = parseInt(prompt("Digite o número do cadastro a ser excluído:") || "0") - 1;
    while (isNaN(numeroCadastro) || numeroCadastro < 0 || numeroCadastro >= mundos.length) {
        console.log("Cadastro não encontrado. Tente novamente.");
        numeroCadastro = parseInt(prompt("Digite o número do cadastro a ser excluído:") || "0") - 1;
    }

    const confirmacao = prompt("Certeza que deseja excluir esse mundo? (Sim/Não)")?.toLowerCase();
    if (confirmacao === "sim") {
        mundos.splice(numeroCadastro, 1);
        console.log("\nMundo excluído com sucesso!");
    } else {
        console.log("\nA exclusão foi cancelada.");
    }
}

function main(): void {
    while (true) {
        const opcao = exibirMenu();
        if (opcao === 1) {
            if (mundos.length < 6) {
                const mundoCriado = criarMundo();
                mundos.push(mundoCriado);
                console.log("\nMundo criado com sucesso!");
            } else {
                console.log("\nVocê já atingiu o limite de 6 mundos cadastrados.");
            }
        } else if (opcao === 2) {
            listarMundo();
        } else if (opcao === 3) {
            atualizarMundo();
        } else if (opcao === 4) {
            excluirMundo();
        } else if (opcao === 5) {
            console.log("Saindo... Até logo!");
            break;
        } else {
            console.log("Opção inválida, tente novamente.");
        }
    }
}

main();

