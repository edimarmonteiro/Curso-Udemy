
function gerarNumero(min, max, array){
   const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
   return array.includes(aleatorio) ?
    aleatorio = gerarNumero(min, max, array)
    : aleatorio
}

function mostraNUm(seunum){
    const Numero = Array(seunum)
    //Valor atual do ARRAY(seunum)
    .fill(0)
    //Novo valor que o ARRAY vai receber com o nome de (nums)
    .reduce((nums) => {
        const novoNumero = gerarNumero(1, 60, nums)
        return [...nums, novoNumero]
    }, [])
    //Colocar os numeros em forma cresente
    .sort((n1, n2) => n1 - n2)

    return Numero
}

console.log(mostraNUm(6))