import React from 'react';
import { VST_PLUGINS } from './Data.js';
import {DEFAULT_STATE} from './Data.js';

const PROJECT_NAME = "VSTDB"
const DEFAULT = DEFAULT_STATE;
const PLUGINS = VST_PLUGINS;

class VSTDB extends React.Component {
  constructor(props){
    super(props);
    this.state = DEFAULT
    this.nextPlugin = this.nextPlugin.bind(this);
  }

  nextPlugin = (currentID) => {
    for (let i = 0; i < PLUGINS.length; i += 1){
      if (currentID === PLUGINS[i].id){
        return this.setState({
          object: PLUGINS[i - 1]
        })
      }
    }
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
              <nav>
                <button><i class="fas fa-forward"></i></button>
                <button><i class="fas fa-backward"></i></button>
                <button><i class="fas fa-random"></i></button>
              </nav>
            </div>
          </div>
        </header>
        <main>
          <div className="container-fluid">
            <h2>{this.state.name}</h2>
            <img src={this.state.icon} alt={this.state.name + " - " + PROJECT_NAME} />
            <table className="table">
              <tr><th>Item</th><th>Result</th></tr>
              <tr><td>Name</td><td>{this.state.name}</td></tr>
              <tr><td>Description</td><td>{this.state.description}</td></tr>
              <tr><td>Category</td><td>{this.state.category}</td></tr>
              <tr><td>Vendor</td><td>{this.state.vendor}</td></tr>
              <tr><td>URL</td><td>{this.state.url}</td></tr>
              <tr><td>ID</td><td>{this.state.id}</td></tr>
            </table>
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
