{/* State */}

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

{/* Table */}
<table className="table">
  <tr><th>Item</th><th>Result</th></tr>
  <tr><td>Vendor</td><td>{this.state.vendorName}</td></tr>
  <tr><td>Vendor URL</td><td>{this.state.vendorURL}</td></tr>
  <tr><td>Plugin Name</td><td>{this.state.pluginName}</td></tr>
  <tr><td>Description</td><td>{this.state.pluginDesc}</td></tr>
  <tr><td>Category</td><td>{this.state.pluginCat}</td></tr>
  <tr><td>ID</td><td>{this.state.pluginID}</td></tr>
</table>

{/* Display Header */}
<div className="row no-gutters text-center">
<div className="col">
  <h2>{this.state.pluginName}</h2>
  <p>{this.state.pluginDesc}</p>
  <img src={this.state.pluginIcon} alt={this.state.pluginName + " - " + PROJECT_NAME} draggable="false" />
</div>
</div>