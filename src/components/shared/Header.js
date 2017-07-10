import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <header className="page__header">
                <h1 className="page__title">{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;