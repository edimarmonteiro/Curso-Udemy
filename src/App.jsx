import './App.css';
import './index.css';
import React from 'react';


import Primeiro from './components/basicos/Primeiro';
import ComParamito from './components/basicos/ComParamito';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
//Componente sem Function
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProduto from './components/repeticao/TabelaProduto';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/Megasena/Mega';


function App(){
    return (
    <div className="App">
        <h1>Fundamentos Ract</h1>

        <div className='Cards'>

            <Card titulo='#12 Desafio Megasena' color='#884EA0'>
                <Mega></Mega>
            </Card>
            <Card titulo='#11 Contador' color='#FF7F50'>
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo='#10 Componente Contolado' color='#C1932E'>
                <Input></Input>
            </Card>
            <Card titulo='#9 Comunicação Indereta' color='#C13F2E'>
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo='#8 Comunicação Direta' color='#AB2EC1'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='#7 Renderização Condicional' color='#2E86C1'>
                <ParOuImpar numero={20}>
                </ParOuImpar>

                <UsuarioInfo usuario={{nome: 'Edimar'}}/>
                <UsuarioInfo usuario={{email: 'edimar971'}}/>
            </Card>
            < Card titulo="#6 Repetição Produto" color="#CDFF50">
                <TabelaProduto>

                </TabelaProduto>
            </Card>
            <Card titulo="#5 - Repetição" color="#FF7F50">
                <ListaAlunos>
                </ListaAlunos>
            </Card>
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

