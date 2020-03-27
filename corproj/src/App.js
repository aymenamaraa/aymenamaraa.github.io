import React, { Component } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import Histogram from './Histogram';
import PieChart from './PieChart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownlistCategory: null,
      gridDataState: {
        sort: [
          { field: "ProductName", dir: "asc" }
        ],
        page: { skip: 0, take: 10 }
      },
      windowVisible: false,
      gridClickedRow: {}
    }
  }

  handleDropDownChange = (e) => {
    this.setState({
      dropdownlistCategory: e.target.value.CategoryID
    });
  }

  handleGridDataStateChange = (e) => {
    this.setState({ gridDataState: e.data });
  }

  handleGridRowClick = (e) => {
    this.setState({
      windowVisible: true,
      gridClickedRow: e.dataItem
    });
  }

  closeWindow = (e) => {
    this.setState({
      windowVisible: false
    });
  }

  render() {
    return (
      <div className="kendo-react-getting-started">
        <Histogram />
        <PieChart />
      </div>
    );
  }
}


export default App;
