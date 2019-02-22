import React, { Component } from 'react';
import './FormContainer.css';

import PseudoInscription from './pseudo/PseudoInscription';
import MdpInscription from './mdp/MdpInscription';
import Try from './try-button/Try';

//import Try from './try-button/Try';

class FormContainer extends Component {
    render(){
        return (
            <form className="Form-container">
                <PseudoInscription ></PseudoInscription>
                <MdpInscription ></MdpInscription>
                <Try></Try>
            </form>
        )
    }
}

export default FormContainer;