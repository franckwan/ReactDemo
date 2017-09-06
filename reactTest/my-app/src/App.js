import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/BodyIndex';

class App extends Component {
    render() {
        var Component = <ComponentHeader/>;
        return (


            <div className="App">
                {Component}
                <BodyIndex/>
                <ComponentFooter/>


                {/*<h2>页面主题内容</h2>
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save11 to reload.
        </p>*/}

            </div>

        );
    }
}

export default App;
