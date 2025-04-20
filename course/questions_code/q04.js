function calcularProduto(valores) {
    let produto = 1;
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] !== 0) {
            produto *= valores[i];
        }
    }
    return produto;
}

const numeros = [2, 3, 0, 4];
const resultado = calcularProduto(numeros);
console.log(resultado);