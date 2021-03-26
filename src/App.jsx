import React from 'react';
import PropTypes from 'prop-types';

import { PLUGINS } from './Plugins.js';

const PROJECT_NAME = "VSTdb"
let todaysDate = new Date();


const Header = (props) => {
  return(
    <header className="header">
      <div className="row no-gutters">
        <nav className="navbar navbar-expand-lg">
          <div className="col"><a href="/"><h1>{PROJECT_NAME}</h1></a></div>
          <div className="col">
            <button onClick={props.decreaseStateValue}>-</button>
            <button onclick={props.randomStateValue}>R</button>
            <button onClick={props.increaseStateValue}>+</button>
          </div>
        </nav>
      </div>
    </header>
  );
}


const Footer = (props) => {
  return (
    <footer>
      <div className="row no-gutters">
        <div className="col">
          <p className="text-center">Made with <i className="fa fa-heart" /> by <a href="https://nathandonnelly.com">Nathan Donnelly</a> at <a href="https://diztro.com">Diztro</a> for <a href="https://image-line.com">FL Studio</a> users</p>
          <p className="text-center"><i className="fa fa-copyright"/> Copyright {props.copyrightDate}</p>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = { copyrightDate: 2020 }
Footer.propTypes = { copyrightDate: PropTypes.number.isRequired }


const Display = (props) => {
  return(
    <main>
      <div className="container-fluid">
        <div className="row no-gutters">
          <span className="vstdb-component-icon-container">
            {props.renderImages}
          </span>
        </div>
        <div className="row no-gutters">
          <table className="table mt-5">
            <tr><th>Data Point</th><th>Data</th></tr>
            <tr><td>Alphabetical Order of Plugin by Vendor</td><td>{props.stateValueIndexNumber}</td></tr>
            <tr><td>Vendor Name</td><td>{props.stateValueVendorName}</td></tr>
            <tr><td>Vendor ID</td><td>{props.stateValueVendorID}</td></tr>
            <tr><td>Vendor URL</td><td>{props.stateValueVendorURL}</td></tr>
            <tr><td>Plugin Name</td><td>{props.stateValuePluginName}</td></tr>
            <tr><td>Plugin Description</td><td>{props.stateValuePluginDesc}</td></tr>
            <tr><td>Plugin Category</td><td>{props.stateValuePluginCat}</td></tr>
            <tr><td>Plugin ID</td><td>{props.stateValuePluginID}</td></tr>
          </table>
        </div>
      </div>
    </main>
  );
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stateValue: 0,
      vendorName: "Vendor Name",
      vendorID:   "Vendor ID",
      vendorURL:  "Vendor URL",
      pluginName: "Plugin Name",
      pluginDesc: "Plugin Description",
      pluginCat:  "Plugin Category",
      pluginIcon:  "Plugin Icon",
      pluginID:   "Plugin ID"
    };
    this.increaseValue = this.increaseValue.bind(this);
    this.decreaseValue = this.decreaseValue.bind(this);
    this.randomValue = this.randomValue.bind(this);
  }

  increaseValue(){
    return this.setState(state => ({
      stateValue: this.state.stateValue + 1
    }));
  };

  decreaseValue(){
    if (this.state.stateValue === 0 ){
      return this.setState(state => ({
        stateValue: 0
      }));
    } else return this.setState(state => ({
      stateValue: this.state.stateValue - 1
    }));
  }

  randomValue(inputData){
    return this.setState(state => ({
      stateValue: Math.floor(Math.random * inputData.length)
    }));
  }

  render(){
    let vendorName  =   PLUGINS[this.state.stateValue].vendorName;
    let vendorID    =   PLUGINS[this.state.stateValue].vendorID;
    let vendorURL   =   PLUGINS[this.state.stateValue].vendorURL;
    let pluginName  =   PLUGINS[this.state.stateValue].pluginName;
    let pluginDesc  =   PLUGINS[this.state.stateValue].pluginDesc;
    let pluginCat   =   PLUGINS[this.state.stateValue].pluginCat;
    let pluginIcon  =   PLUGINS[this.state.stateValue].pluginIcon;
    let pluginID    =   PLUGINS[this.state.stateValue].pluginID;

    let renderPlugins = PLUGINS.map(function(plugin){
      return <img src={plugin.pluginIcon}
                  alt={plugin.pluginName}
                  className="vstdb-component-icon"
                  id={plugin.pluginName + "-VSTdbComponent"} draggable="false" />
                  
    })

    return (
      <div className="wrapper">
        <Header
          decreaseStateValue={this.decreaseValue}
          randomStateValue={this.randomValue}
          increaseStateValue={this.increaseValue} />

        <Display
          renderImages={renderPlugins} 
          stateValueIndexNumber={this.state.stateValue}
          stateValueVendorName={vendorName}
          stateValueVendorID={vendorID} 
          stateValueVendorURL={vendorURL} 
          stateValuePluginName={pluginName}
          stateValuePluginDesc={pluginDesc}
          stateValuePluginCat={pluginCat}
          stateValuePluginID={pluginID} />

        <Footer copyrightDate={ todaysDate.getFullYear() }/>
      </div>
    );
  }
}

export default App;