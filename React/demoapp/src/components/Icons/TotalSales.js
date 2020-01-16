import React, { Component } from 'react';


class TotalSales extends Component { 

  state = {
    Totalsales: {}
  }

  async componentDidMount() {
    const ts = await fetch('https://inlupp-fa.azurewebsites.net/api/total-sales');
    const tsdata = await ts.json();
    this.setState({Totalsales: tsdata})
  }
    
    render() { 
        return ( 
            <div className="col-md-3 grid-margin stretch-card">
            <div className="card border-0 border-radius-2 bg-success">
              <div className="card-body">
                <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                  <div className="icon-rounded-inverse-success icon-rounded-lg">
                    <i className="mdi mdi-arrow-top-right"></i>
                  </div>
                  <div className="text-white">
                    <p className="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Sales</p>
                    <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                      <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1">{ this.state.Totalsales.currency }{ this.state.Totalsales.amount }</h3>
                      <small className="mb-0">This month</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         );
    }
}
 
export default TotalSales;