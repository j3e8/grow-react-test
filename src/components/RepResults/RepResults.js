import React from 'react';

class RepResults extends React.Component {
  constructor(props) {
    super(props);
    this.selectRep = this.selectRep.bind(this);
    this.renderResultsRows = this.renderResultsRows.bind(this);
  }

  selectRep(rep) {
    console.log('selectRep', rep);
    if (this.props.handleSelectedRep) {
      this.props.handleSelectedRep(rep);
    }
  }

  renderResultsRows() {
    return this.props.results.map((r, index) => {
      return (
        <tr key={ index } onClick={ this.selectRep.bind(this, r) }>
          <td>{ r.name }</td>
          <td>{ r.party.substring(0, 1) }</td>
        </tr>
      )
    })
  }

  render() {
    if (!this.props.results) {
      return null;
    }

    return (
      <div className="RepResults">
        <h2>List / <span className="accent">{ this.props.repType }</span></h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Party</th>
            </tr>
          </thead>
          <tbody>
            { this.renderResultsRows() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default RepResults;
