import React from 'react';
import Filters from '../Filters/Filters.js';
import RepInfo from '../RepInfo/RepInfo.js';
import RepResults from '../RepResults/RepResults.js';

class FindMyRepApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectedRep = this.handleSelectedRep.bind(this);

    this.state = {
      results: undefined
    }
  }

  handleSelectedRep(rep) {
    this.setState({
      selectedRep: rep
    })
  }

  handleSearch(filter) {
    console.log(filter);

    let repType = filter.repType == 'senator' ? 'Senators' : 'Representatives';
    this.setState({
      repType: repType
    });
    let stateCode = filter.stateCode;

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
         let data = JSON.parse(xhr.responseText);
         console.log(data);
         this.setState({
           results: data.results
         })
      }
    }.bind(this);
    xhr.open("GET", `http://localhost:3000/${repType.toLowerCase()}/${stateCode}`, true);
    xhr.send();
  }

  render() {
    return (
      <div className="FindMyRepApp">
        <h1>Who's my representative?</h1>

        <Filters handleSearch={ this.handleSearch }/>

        <section>
          <div className="flex-row spaced">
            <div className="flex-cell">
              <RepResults repType={ this.state.repType } results={ this.state.results } handleSelectedRep={ this.handleSelectedRep } />
            </div>
            <div className="flex-cell">
              <RepInfo rep={ this.state.selectedRep } />
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default FindMyRepApp;
