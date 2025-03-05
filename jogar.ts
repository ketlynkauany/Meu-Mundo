function exibirMenu(): number {
    console.log("Sistema Meu Mundo - Minecraft");
    console.log("==========================");
    console.log("1. Criar Mundo");
    console.log("2. Listar Mundo");
    console.log("3. Atualizar Mundo");
    console.log("4. Excluir Mundo");
    console.log("5. Sair");
    const opcao = parseInt(prompt("Escolha a opção desejada:") || "0");
    return opcao;
}

function criarMundo(): [string, string, string] {
    console.log("Criar meu mundo!");
 
    const biomas = [
        "Floresta Mista (Variação Montanhosa)",
        "Floresta Florada (Variação Montanhosa)",
        "Floresta de Bétulas",
        "Planícies",
        "Pântanos",
        "Floresta Coberta",
        "Mega Taiga"
    ];
    console.log("Escolha o bioma:");
    biomas.forEach((bioma, index) => {
        console.log(`${index + 1}. ${bioma}`);
    });
    const biomaEscolhido = parseInt(prompt("Digite o número do bioma:") || "1") - 1;

    const climas = ["Céu limpo", "Céu nublado", "Chovendo"];
    console.log("Escolha o clima:");
    climas.forEach((clima, index) => {
        console.log(`${index + 1}. ${clima}`);
    });
    const climaEscolhido = parseInt(prompt("Digite o número do clima:") || "1") - 1;

    const horarios = ["Nascer do sol", "Manhã", "Tarde", "Por do sol", "Noite"];
    console.log("Escolha o horário:");
    horarios.forEach((horario, index) => {
        console.log(`${index + 1}. ${horario}`);
    });
    const horarioEscolhido = parseInt(prompt("Digite o número do horário:") || "1") - 1;

    return [biomas[biomaEscolhido], climas[climaEscolhido], horarios[horarioEscolhido]];
}

function listarMundo(bioma: string, clima: string, horario: string): void {
    console.log("\nDetalhes do seu mundo:");
    console.log(`Bioma: ${bioma}`);
    console.log(`Clima: ${clima}`);
    console.log(`Horário: ${horario}\n`);
}

function atualizarMundo(bioma: string, clima: string, horario: string): [string, string, string] {
    console.log("\nAtualizar meu mundo!");

    const biomas = [
        "Floresta Mista (Variação Montanhosa)",
        "Floresta Florada (Variação Montanhosa)",
        "Floresta de Bétulas",
        "Planícies",
        "Pântanos",
        "Floresta Coberta",
        "Mega Taiga"
    ];
    console.log("Escolha o novo bioma:");
    biomas.forEach((bioma, index) => {
        console.log(`${index + 1}. ${bioma}`);
    });
    const biomaEscolhido = parseInt(prompt("Digite o número do bioma:") || "1") - 1;

    const climas = ["Céu limpo", "Céu nublado", "Chovendo"];
    console.log("Escolha o novo clima:");
    climas.forEach((clima, index) => {
        console.log(`${index + 1}. ${clima}`);
    });
    const climaEscolhido = parseInt(prompt("Digite o número do clima:") || "1") - 1;

    const horarios = ["Nascer do sol", "Manhã", "Tarde", "Por do sol", "Noite"];
    console.log("Escolha o novo horário:");
    horarios.forEach((horario, index) => {
        console.log(`${index + 1}. ${horario}`);
    });
    const horarioEscolhido = parseInt(prompt("Digite o número do horário:") || "1") - 1;

    return [biomas[biomaEscolhido], climas[climaEscolhido], horarios[horarioEscolhido]];
}

function excluirMundo(): void {
    console.log("\nMundo excluído com sucesso!");
}

function main(): void {
    let bioma: string | null = null;
    let clima: string | null = null;
    let horario: string | null = null;

    while (true) {
        const opcao = exibirMenu();
        if (opcao === 1) {
            [bioma, clima, horario] = criarMundo();
            console.log("\nMundo criado com sucesso!");
        } else if (opcao === 2) {
            if (bioma && clima && horario) {
                listarMundo(bioma, clima, horario);
            } else {
                console.log("Nenhum mundo foi criado ainda.");
            }
        } else if (opcao === 3) {
            if (bioma && clima && horario) {
                [bioma, clima, horario] = atualizarMundo(bioma, clima, horario);
                console.log("\nMundo atualizado com sucesso!");
            } else {
                console.log("Nenhum mundo foi criado ainda.");
            }
        } else if (opcao === 4) {
            excluirMundo();
            bioma = clima = horario = null; 
        } else if (opcao === 5) {
            console.log("Saindo... O mundo foi criado com sucesso!");
            break;
        } else {
            console.log("Opção inválida, tente novamente.");
        }
    }
}

