import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild'


const  defaultProps = {
    username : "这是一个默认的用户名"
}

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
        //第一种方式
        // var mySubmitButton = document.getElementById('submitButton');
        // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';
        //第二种 用ref的方式
        this.refs.submitButton.style.color = 'blue';
    }

    render() {

        // setTimeout(() => {
        //     this.setState({username: "wansu"});
        // }, 4000)
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{this.state.age} {this.props.userid} {this.props.username}</p>
                <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this,99) } />
                <BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )

    }
}

BodyIndex.propsTypes = {
    userid : React.PropTypes.number.isRequired
}

BodyIndex.defaultProps = defaultProps;