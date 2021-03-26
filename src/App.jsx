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
            <button onClick={props.randomStateValue}>R</button>
            <button onClick={props.increaseStateValue}>+</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
Header.defaultProps = {
  descreaseStateValue: -1,
  increaseStateValue: 1,
  randomStateValue: 1
}
Header.propTypes = {
  decreaseStateValue: PropTypes.func.isRequired,
  increaseStateValue: PropTypes.func.isRequired,
  randomStateValue:   PropTypes.func.isRequired
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
        <div className="row">
          <span className="vstdb-component-icon-container">{props.renderPluginIcons}</span>
        </div>
        <div className="text-center">
            <img src={props.stateValuePluginIcon} alt={props.stateValuePluginName} />
            <br />
            <h2>{props.stateValuePluginName}</h2><h3>{props.stateValueVendorName}</h3>
            <br />
        </div>
        <div className="row no-gutters">
          <table className="table">
            <thead><tr><th>Data Point</th><th>Data</th></tr></thead>
            <tbody>
              <tr><td>Current VSTdb Position</td><td>{props.stateValueIndexNumber}</td></tr>
              <tr><td>Vendor Name</td><td>{props.stateValueVendorName}</td></tr>
              <tr><td>Vendor ID</td><td>{props.stateValueVendorID}</td></tr>
              <tr><td>Vendor URL</td><td><a href={props.stateValueVendorURL}>{props.stateValueVendorURL}</a></td></tr>
              <tr><td>Plugin Name</td><td>{props.stateValuePluginName}</td></tr>
              <tr><td>Plugin Description</td><td>{props.stateValuePluginDesc}</td></tr>
              <tr><td>Plugin Category</td><td>{props.stateValuePluginCat}</td></tr>
              <tr><td>Plugin ID</td><td>{props.stateValuePluginID}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
Display.defaultProps = {
  stateValueIndexNumber: 0,
  stateValueVendorName:         "Diztro",
  stateValueVendorID:           "1c21812e-881d-489a-afd9-26f705548e94",
  stateValueVendorURL:          "https://diztro.com",
  stateValuePluginName:         "VSTdb",
  stateValuePluginDescription:  "VST Plugin Database for FL Studio",
  stateValuePluginCategory:     "N/A",
  StateValuePlugiinID:          "23f58694-940a-4406-bfd7-e3db0038b45e"
}
Display.propTypes = {
  stateValueIndexNumber:        PropTypes.number.isRequired,
  stateValueVendorName:         PropTypes.string.isRequired,
  stateValueVendorID:           PropTypes.string.isRequired,
  stateValueVendorURL:          PropTypes.string.isRequired,
  stateValuePluginName:         PropTypes.string.isRequired,
  stateValuePluginDescription:  PropTypes.string.isRequired,
  stateValuePluginCategory:     PropTypes.string.isRequired,
  StateValuePlugiinID:          PropTypes.string.isRequired
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
      pluginIcon: "Plugin Icon",
      pluginID:   "Plugin ID"
    };
    this.decreaseValue  = this.decreaseValue.bind(this);
    this.increaseValue  = this.increaseValue.bind(this);
    this.randomValue    = this.randomValue.bind(this);
  }

  decreaseValue(){
    if (this.state.stateValue === 0 ){
      return this.setState(state => ({
        stateValue: (PLUGINS.length - 1)
      }));
    } else return this.setState(state => ({
      stateValue: this.state.stateValue - 1
    }));
  };

  increaseValue(){
    if (this.state.stateValue < (PLUGINS.length - 1)){
      return this.setState(state => ({
        stateValue: this.state.stateValue + 1
      }));
    } else return this.setState(state => ({
      stateValue: 0
      }));
  };

  randomValue(){
    return this.setState(state => ({
      stateValue: Math.floor(Math.random() * PLUGINS.length)
    }));
  };

  renderPlugins = PLUGINS.map((plugin, index) => {
    return <img src={plugin.pluginIcon}
                alt={plugin.pluginName}
                key={plugin.pluginID}
                onClick={() => this.setState(state => ({
                  stateValue: index
                }))}
                className="vstdb-component-icon"
                draggable="false" />          
  });

  render(){
    let vendorName  =   PLUGINS[this.state.stateValue].vendorName;
    let vendorID    =   PLUGINS[this.state.stateValue].vendorID;
    let vendorURL   =   PLUGINS[this.state.stateValue].vendorURL;
    let pluginName  =   PLUGINS[this.state.stateValue].pluginName;
    let pluginDesc  =   PLUGINS[this.state.stateValue].pluginDesc;
    let pluginCat   =   PLUGINS[this.state.stateValue].pluginCat;
    let pluginIcon  =   PLUGINS[this.state.stateValue].pluginIcon;
    let pluginID    =   PLUGINS[this.state.stateValue].pluginID

    return (
      <div className="wrapper">
        <Header
          decreaseStateValue={this.decreaseValue}
          randomStateValue={this.randomValue}
          increaseStateValue={this.increaseValue} />

        <Display
          renderPluginIcons={this.renderPlugins}
          stateValueIndexNumber={this.state.stateValue}
          stateValueVendorName={vendorName}
          stateValueVendorID={vendorID} 
          stateValueVendorURL={vendorURL} 
          stateValuePluginName={pluginName}
          stateValuePluginDesc={pluginDesc}
          stateValuePluginCat={pluginCat}
          stateValuePluginIcon={pluginIcon}
          stateValuePluginID={pluginID} />

        <Footer copyrightDate={ todaysDate.getFullYear() }/>
      </div>
    );
  }
}

export default App;