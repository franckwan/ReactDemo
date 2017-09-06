import React from 'react';
import ReactDOM from 'react-dom';

export  default class BodyIndex extends React.Component {
    render() {

        var userName = "";
        var boolInput = false;
        var html = "test lesson";

        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{userName=='' ? '用户还没有后登录' : '用户名' + userName}</p>
                <p><input type="button" value="默认" disabled={boolInput}/></p>
                <p>{html}</p>
            </div>
        )

    }
}