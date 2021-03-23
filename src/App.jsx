import React from 'react';

const PROJECT_NAME = "VSTDB"

class VSTDB extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "VSTDB",
      description: "A Database for Virtual Instruments and Effects",
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
      <div className="wrapper">
        <header>
          <h1>{PROJECT_NAME.toLowerCase()}</h1>
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
              <p>Made with <i className="fa fa-heart footer-heart" /> by <a href="https://nathandonnelly.com">Nathan Donnelly</a> at <a href="https://diztro.com">Diztro</a> for <a href="https://image-line.com">FL Studio</a> users</p>
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
