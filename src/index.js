import React, { Component } from "react";
import ReactDOM from "react-dom";
import ApplicationController from "./api.js";
const apiC = new ApplicationController();

class App extends Component {
    componentDidMount = () => {
        apiC.getNewApplicationsCount();
    };

    render() {
        return (
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
