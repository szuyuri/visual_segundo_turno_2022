const start = () => {
    fetch("https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json")
    .then((response) => response.json())
    .then((data) => 
        data.cand.map(
            candidato => ( { "Nome": candidato.nm, "Votos Válidos": candidato.vap, "Porcentagem": candidato.pvap } )
        )
    ).then(candidatos => { 
        console.clear()
        console.table(candidatos) 
    })
}

start()

setInterval(start, 60000)