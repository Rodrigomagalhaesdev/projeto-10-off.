let bt = document.querySelector("input#bt");
let tres = document.querySelector("div#tres");
let res = document.querySelector("div#res");


bt.addEventListener("click", clica);

function clicar() {
    let p = prompt("Qual o produto que você está comprando?");
    let vp = Number(prompt(`Qual o valor do produto '${p}'?`));
    let cd = (vp / 10).toFixed(2);
    let d = (vp - cd).toFixed(2);

    
    tres.innerHTML = `<h2>Calculo de 10% de desconto para o produto '${p}': </h2>`;
    res.innerHTML = `<p>O preço original era <strong>R$ ${vp} reais</strong>. </p>
    <p>Você acabou de gannhar <strong>R$ ${cd} reais</strong> de desconto -10% OFF.</p>
    <p>Por fim, Você vai pagar <strong>R$ ${d} reais</strong> no produto <strong>'${p}' </strong>.</p>`;    

}