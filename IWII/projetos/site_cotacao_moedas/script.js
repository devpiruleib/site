const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

async function consumirAPI(){
    const resposta = await fetch(url)
    const dados = await resposta.json()

    /* DATA E HORA */
    document.getElementById('span_datahoradol').innerText = dados['USDBRL']['create_date']
    document.getElementById('span_datahoraeur').innerText = dados['EURBRL']['create_date']
    document.getElementById('span_datahorabtc').innerText = dados['BTCBRL']['create_date']
    /* COTAÇÃO */
    document.getElementById('dadosEUR').innerText = formatar_real(dados['EURBRL']['ask'])
    document.getElementById('dadosDOL').innerText = dados['USDBRL']['ask']
    document.getElementById('dadosBTC').innerText = dados['BTCBRL']['ask']
    /* MÁXIMA E MÍNIMA: DÓL */
    document.getElementById('maxdol').innerText = dados['USDBRL']['high']
    document.getElementById('mindol').innerText = dados['USDBRL']['low']
    /* MÁXIMA E MÍNIMA: EUR */
    document.getElementById('maxeur').innerText = dados['EURBRL']['high']
    document.getElementById('mineur').innerText = dados['EURBRL']['low']
    /* MÁXIMA E MÍNIMA: BTC */
    document.getElementById('maxbtc').innerText = dados['BTCBRL']['high']
    document.getElementById('minbtc').innerText = dados['BTCBRL']['low']
}


function formatar_real(real){

    let real_formatado = new Intl.NumberFormat('pt-BR'), {style: 'currency', currency: 'BRL'}.format(real);

    return real_formatado
}