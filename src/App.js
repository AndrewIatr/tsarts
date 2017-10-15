import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScriptCache from './ScriptCache.js';

class App extends Component {

    componentDidMount() {
        this.scriptCache = ScriptCache({
            google: 'https://www.gstatic.com/charts/loader.js'
        });
        this.scriptCache.google.onLoad((err, tag) => {
            window.google.charts.load("current", {packages: ['corechart']});
            window.google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                var data = window.google.visualization.arrayToDataTable([
                    ['Mon', 20, 28, 38, 45],
                    ['Tue', 31, 38, 55, 66],
                    ['Wed', 50, 55, 77, 80],
                    ['Thu', 77, 77, 66, 50],
                    ['Fri', 68, 66, 22, 15]
                    // Treat first row as data as well.
                ], true);

                var options = {
                    legend:'none'
                };

                var chart = new window.google.visualization.CandlestickChart(document.getElementById("chart-1"));
                chart.draw(data, options);
            }
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div id="chart-1"/>
            </div>
        );
    }
}

export default App;
