import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParamito from './components/basicos/ComParamito'


ReactDOM.render(
    <div>
        <Primeiro/>
        <ComParamito
        titulo="Situação do Aluno"
        aluno="Edimar"
        nota={9.3}
        />

    </div>,
    document.getElementById('root')
)

