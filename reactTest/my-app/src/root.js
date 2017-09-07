import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router,Route,hashHistory} from 'react-router';
import ComponentList from 'components/list';

export default class Root extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route Component={App} path="/"></Route>
                <Route Component={ComponentList} path="list"></Route>
            </Router>


        );

    };



}

ReactDOM.render(<Root />, document.getElementById('root'));