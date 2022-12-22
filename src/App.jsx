import './App.css';
import './index.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParamito from './components/basicos/ComParamito';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';

function App(){
    return (
    <div className="App">
        <h1>Fundamentos Ract</h1>

        <div className='Cards'>
            <Card titulo="#4 - Componente com Filho" color="#58D68D">
                <Familia sobrenomepai='Monteiro'/>
            </Card>
            <Card titulo="#03 - Desafio Aleatório" color="#FA6900">
                <Aleatorio
                min = {1}
                max = {45}
                />
            </Card>
            
            <Card titulo="#02 - Com Parâmetro" color='#E8B71A'>
                <ComParamito
                titulo="Situação do Aluno"
                aluno="Edimar"
                nota={9.3}
                />
            </Card>
            
            
            <Card titulo="#01 - Primeiro" color='#588C73'>
                <Primeiro/>
            </Card>
        </div>

    </div>
    )
}
export default App

