import React from 'react';
import './MenuLists.css';

const Lists = (PassedComponent) => {
    return class extends React.Component {
        render(){
            return (
                <div className="Lists">
                    <PassedComponent {...this.props}/>
                </div>
            )
        }
    }
}

const List = ({name}) => <div>{name}</div>

const HeaderList = Lists(List);

export default HeaderList;