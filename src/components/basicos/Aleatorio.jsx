
function Aleatorio({min, max}){
    
    const aleatorio = Math.floor(Math.random() * (max - min)) + min

    return(
        <>
        <h2>Valores aleatório</h2>
        <p><strong>Valor minimo:</strong> {min}</p>
        <p><strong>Valor maximo:</strong> {max}</p>
        <p><strong>Valor escolhido:</strong> {aleatorio}</p>
        </>

    )
}

export default Aleatorio