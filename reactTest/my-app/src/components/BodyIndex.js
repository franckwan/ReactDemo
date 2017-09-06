import React from 'react';
import ReactDOM from 'react-dom';

export default class BodyIndex extends React.Component {

    constructor() {
        super();//继承父类的
        this.state = {username: "parry"};//初始化赋值

    }


    render() {

        setTimeout(() => {
            this.setState({username: "wansu"});
        }, 4000)
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{this.state.username}  {this.props.userid} {this.props.username}</p>
            </div>
        )

    }
}