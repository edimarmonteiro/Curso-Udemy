

export default props => {
    const min = 1
    const max = 18
    const idadealeatoria = () => parseInt(Math.random() * (max - min))+ min
    //Se no sortei for maior que 0.5 é 'Verdadeiro' se não é "Falso"
    const nerdAleatorio = () => Math.random() > 0.5

    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={ function (e){
                props.quandoClicar('Edimar', idadealeatoria(), nerdAleatorio())
            } }>
                Fornecer Informações</button>
        </div>
    )
}