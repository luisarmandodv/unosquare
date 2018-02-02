import React, { Component } from 'react';
import CustomTable from './components/table.js';
import data from './data/data.js';

class App extends Component {
  render() {
    return (
      <div>

        <CustomTable
          data={data}
        />

      </div>
    );
  }
}

export default App;
