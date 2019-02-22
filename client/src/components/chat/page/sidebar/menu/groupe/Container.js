import React, { Component } from 'react';
import './Container.css';

import LogoPrivateSidebar from './logo/Container';

class GroupeMenuSidebar extends Component {
    render(){
        return (
            <div className="groupe-menu-sidebar">
                <LogoPrivateSidebar></LogoPrivateSidebar>
            </div>
        )
    }
}

export default GroupeMenuSidebar;