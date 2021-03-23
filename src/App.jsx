import React from 'react';

const PROJECT_NAME = "VSTDB"

class VSTDB extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "VSTDB",
      description: "a database for virtual instruments and effects",
      category: "N/A",
      id: "6bc0c736-5724-4eeb-8922-80fa087f976f",
      icon: "./icons/diztro/vstdb.png",
      vendor: "Diztro",
      developer: "bc79981a-5bf0-4242-8122-90997b18da1e",
      url: "https://vstdb.org"
    }
  }
  render(){
    return (
      <div className="VSTDB">
        <header className="site-header">
          <h1 className="site-name">{PROJECT_NAME.toLowerCase()}</h1>
        </header>
        <main className="application">
          <div className="current-vst">
            <h2 className="current-vst-name text-center">{this.state.name}</h2>
            <img src={this.state.icon} alt={this.state.name + " - " + PROJECT_NAME} />
            <table className="vst-data">
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
      </div>
    );
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <VSTDB />
    );
  }
}

export default App;
