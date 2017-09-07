import React from 'react';
import ReactDOM from 'react-dom';
import smallFontSize from '../css/style.css'

export  default class ComponentHeader extends React.Component {

    constructor(){
      super();
      this.state={
          miniHeader : false
      };

    };
    switchHeader(){
        this.setState({
            miniHeader:!this.state.miniHeader
        });


    };

    render() {

        const styleComponentHeader = {
            header : {
                backgroundColor : "#333333",
                color: "#FFFFFF",
                "padding-top": (this.state.miniHeader) ? "3px" : "15px",
                paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
            }
        };


        return (
            <header style={styleComponentHeader.header} className="smallFontSize" onClick={this.switchHeader.bind(this)}>
                <h1>这里是头</h1>
            </header>
        )

    }
}