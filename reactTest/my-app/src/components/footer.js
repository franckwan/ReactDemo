import React from 'react';
import ReactDOM from 'react-dom';
import '../css/footer.css';

// var footerCss = require("../css/footer.css");

export default class ComponentFooter extends React.Component {
    render() {
        var footerConvertStype = {
            "minifooter": {
                "backgroundColor": "#333333",
                "color": "#ffffff",
                "paddingTop": "3px",
                "paddingLeft": "20px",
                "paddingBottom": "3px"
            },
            "minifooter_h1": {
                "fontSize": "15px"
            }
        };
        // console.log(footerCss);
        return (
            <footer style={footerConvertStype.minifooter}>
                <h1 style={footerConvertStype.minifooter_h1}>这里是页脚，一般放置版权的一些信息</h1>
            </footer>
        )

    }
}