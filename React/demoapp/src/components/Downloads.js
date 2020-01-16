import React, { Component } from 'react';

class Downloads extends Component {
    state = { 
      downloads: {}
     }
     componentDidMount() {
      fetch("https://inlupp-fa.azurewebsites.net/api/downloadss")
      .then(res => res.json())
      .then(data => {
      this.setState({downloads: data})
      })
    }
    render() { 
        return ( 
            <div className="row">
                <div className="col-md-12 stretch-card">
                  <div className="card">
                    <div className="card-body"> 
                      <p className="card-title">Downloads</p>
                      <p className="text-muted mb-2">Watching ice melt. This is fun. Only you could make those words cute.</p>
                      <div className="row mt-4">
                        <div className="col-md-6 stretch-card">
                          <div className="row d-flex align-items-center">
                            <div className="col-6">
                              <div id="offlineProgress"></div>                              
                            </div>
                            <div className="col-6 pl-0">
                            <p className="mb-0">Online</p>
                              <p className="mb-0">{this.state.downloads.offlineAmount} </p>
                              <h2></h2>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 stretch-card mt-4 mt-md-0">
                          <div className="row d-flex align-items-center">
                            <div className="col-6">
                              <div id="onlineProgress"></div>                              
                            </div>
                            <div className="col-6 pl-0">
                              <p className="mb-0">Online</p>
                              <h2>{this.state.downloads.onlineAmount}</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         );
    }
}
 
export default Downloads;