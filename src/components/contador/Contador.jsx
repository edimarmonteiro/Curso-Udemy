
import Botoem from './Botoem';
import Display from './Display';
import './Contador.css'
import React, { Component} from 'react';


class Contador extends Component {

        state = {
            numero: this.props.numeroInicial,
        };

        novo = () => {
            this.setState({
                numero: this.state.numero + 1,
            });
        }

        menos = () => {
            this.setState({
                numero: this.state.numero -1,
            });
        }

        render(){
            return  (
                <div className='Contador'>
                    <h2>Contador</h2>
                    <Display numero={this.state.numero}/>
                   
                   <Botoem novo={this.novo} menos={this.menos}/>

                </div>
        );}
    }

export default Contador