import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild'

export default class BodyIndex extends React.Component {

    constructor() {
        super();//继承父类的
        this.state = {username: "parry",age:20};//初始化赋值

    }
    handleChildValueChange(event){
        this.setState({age:event.target.value});

    }

    changeUserInfo(age){
        this.setState({age:age});
    }

    render() {

        // setTimeout(() => {
        //     this.setState({username: "wansu"});
        // }, 4000)
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{this.state.age} {this.props.userid} {this.props.username}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this,99) } />
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )

    }
}