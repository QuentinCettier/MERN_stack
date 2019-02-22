import React, { Component } from 'react';
import './Container.css';

import InscriptionTitle from './titre/InscriptionTitle';
import FormContainer from './formulaire/FormContainer';
//import Paragaphe from './texts/paragraphe/Home-explication';
//import Try from './try-button/Try';

class TextContainer extends Component {
    render(){
        return (
            <div className="Inscription-container">
                <InscriptionTitle></InscriptionTitle>
                <FormContainer></FormContainer>
            </div>
        )
    }
}

export default TextContainer;