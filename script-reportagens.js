/// -------- Código para reportagens irem para a página automaticamente

/// 1. Fazer uma função assincrona para carregar e processar o arquivo CSV
async function iniciar() {

    try {
        // Ler o csv
        const dados = await d3.csv("dados_reportagens.csv");

        // Iterar sobre cada linha do CSV
        dados.forEach(linha => {
            // Acessar o valor da coluna 'manchete' e imprimir
            console.log(linha.manchete);
        });


    } catch (error) {
        console.error('Erro ao ler o arquivo CSV:', error);
    }
}

// Chamar a função iniciar para iniciar o processo
iniciar();
