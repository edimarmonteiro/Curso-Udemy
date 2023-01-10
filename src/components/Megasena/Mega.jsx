
import React, {useState} from 'react'
export default props => {

    
function gerarNumero(min, max, array){
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ?
     aleatorio = gerarNumero(min, max, array)
     : aleatorio
 }
 
 function mostraNUm(aqtd){
     const Numero = Array(aqtd)
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

    const aqtd = props.aqtd || 6
 //MECHENDO NO ESTADO DO DADO
    const numeroInic = Array(aqtd).fill(0)
                               //Para já começar mostrando algo, no caso (0)
    const [numero, setNumero] = useState(numeroInic)
    return(
        <div>
            <h2>Mega</h2>
            <h3>{numero.join(' ')}</h3>
            <button onClick={_ => setNumero(mostraNUm(aqtd))}>Gera Numero</button>
        </div>
    );
}