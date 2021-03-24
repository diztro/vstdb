import React from 'react';
import { PLUGINS } from './Plugins.js';

const PROJECT_NAME = "VSTDB"
let GLOBAL_COUNT = 0;

class VSTDB extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      vendorName: PLUGINS[GLOBAL_COUNT].vendorName,
      vendorID:   PLUGINS[GLOBAL_COUNT].vendorID,
      vendorURL:  PLUGINS[GLOBAL_COUNT].vendorURL,
      pluginName: PLUGINS[GLOBAL_COUNT].pluginName,
      pluginDesc: PLUGINS[GLOBAL_COUNT].pluginDesc,
      pluginCat:  PLUGINS[GLOBAL_COUNT].pluginCat,
      pluginID:   PLUGINS[GLOBAL_COUNT].pluginID,
      pluginIcon: PLUGINS[GLOBAL_COUNT].pluginIcon
    }
    this.nextPlugin = this.nextPlugin.bind(this);
    this.previousPlugin = this.previousPlugin.bind(this);
  }

  nextPlugin = () => {
    return GLOBAL_COUNT = GLOBAL_COUNT + 1;
  }
  previousPlugin = () => {
    return GLOBAL_COUNT = GLOBAL_COUNT - 1;
  }
  
  render(){
    return (
      <div className="wrapper">
        <header>
          <div className="row no-gutters">
            <div className="col">
              <h1>{PROJECT_NAME.toLowerCase()}</h1>
            </div>
            <div className="col">
              <button onClick={this.previousPlugin}>-</button>
              <button onClick={this.nextPlugin}>+</button>
            </div>
          </div>
        </header>
        <main>
          <div className="container-fluid">
            <div className="row no-gutters text-center">
              <div className="col">
                <h2>{this.state.pluginName}</h2>
                <p>{this.state.pluginDesc}</p>
                <img src={this.state.pluginIcon} alt={this.state.pluginName + " - " + PROJECT_NAME} draggable="false" />
              </div>
            </div>
            <div className="row no-gutters">
              <table className="table">
                <tr><th>Item</th><th>Result</th></tr>
                <tr><td>Vendor</td><td>{this.state.vendorName}</td></tr>
                <tr><td>Vendor URL</td><td>{this.state.vendorURL}</td></tr>
                <tr><td>Plugin Name</td><td>{this.state.pluginName}</td></tr>
                <tr><td>Description</td><td>{this.state.pluginDesc}</td></tr>
                <tr><td>Category</td><td>{this.state.pluginCat}</td></tr>
                <tr><td>ID</td><td>{this.state.pluginID}</td></tr>
              </table>
            </div>
          </div>
        </main>
        <footer>
          <div className="row no-gutters text-center">
            <div className="col">
              <p>Made with <i className="fa fa-heart" /> by <a href="https://nathandonnelly.com" id="nathandonnelly">Nathan Donnelly</a> at <a href="https://diztro.com" id="diztro">Diztro</a> for <a href="https://image-line.com" id="flstudio">FL Studio</a> users</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return (
      <VSTDB />
    );
  }
}

export default App;
