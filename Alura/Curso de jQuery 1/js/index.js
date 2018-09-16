let atualizaDados = function () {
    let carrinhos = $('.carrinho');
    carrinhos.each(function () {
        let carrinho = $(this);
        let itens = carrinho.find('.item-total:visible');
        let total = 0;

        for (let i = 0; i < itens.length; i++) {
            total += parseFloat(itens[i].textContent);
        }

        carrinho.find('.valor-total').text(total);
        carrinho.find('.quantidade-itens').text(itens.length);
    });
}

let removeItem = function (event) {
    event.preventDefault();
    $(this).closest('tr').hide();
    atualizaDados();
}

let undo = function () {
    let carrinho = $(this).closest('.carrinho');
    carrinho.find('tr:visible').removeClass('recuperado');
    let trs = carrinho.find('tr:hidden');
    trs.addClass('recuperado');
    trs.show();
    atualizaDados();
}

let geraPropagandas = function () {
    let propagandas = [
        "O que acha de compra uma motocicleta?",
        "O que acha de compra uma lancha?",
        "O que acha de compra uma bicicleta?",
        "O que acha de compra um carro?"
    ];

    let indice = Math.floor(propagandas.length * Math.random());
    let texto = propagandas[indice];
    let tr = $('<tr>').addClass('propaganda').append($('<td>'));
    tr.find('td').attr('colspan',6).text(texto);
    return tr;
}

let alternaPropaganda = function(event){
    event.preventDefault();
    $('.propaganda').toggle();
}

let aposInicializado = function () {
    atualizaDados();
    $('.remove-item').click(removeItem);
    $('.undo').click(undo);

    $('.carrinho').each(function () {
        $(this).find('tr:nth-child(3n)').each(function () {
            geraPropagandas().insertAfter($(this));
        });
    });

    $('#esconde-propagandas').click(alternaPropaganda);
    $('#mostra-propagandas').click(alternaPropaganda);
}

$(aposInicializado);