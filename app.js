function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada dado na lista de resultados
    for (let dado of dados) {
        // Concatena HTML para criar um novo elemento de resultado
        resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao} </p>
                <a href=${dado.link} target="_blank"> Mais Informaçoes </a>
            </div>
        `;
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}



