import React, { Component } from 'react';
import './TextContainer.css';

import Title from './texts/title/Send-message';
import Paragaphe from './texts/paragraphe/Home-explication';
import Try from './try-button/Try';

class TextContainer extends Component {
    render(){
        return (
            <div className="TextContainer">
                <Title></Title>
                <Paragaphe></Paragaphe>
                <Try></Try>
            </div>
        )
    }
}

export default TextContainer;