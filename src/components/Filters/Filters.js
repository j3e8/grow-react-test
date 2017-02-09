import React from 'react';
import STATES from '../../states.js';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.updateRepType = this.updateRepType.bind(this);
    this.updateState = this.updateState.bind(this);

    this.renderStateOptions = this.renderStateOptions.bind(this);
    this.renderErrorMessage = this.renderErrorMessage.bind(this);

    this.state = {
      submitted: false,
      repType: undefined,
      stateCode: undefined
    };
  }

  handleSearch() {
    this.setState({
      submitted: true
    });

    if (!this.state.repType || !this.state.stateCode) {
      return;
    }
    let filter = {
      repType: this.state.repType,
      stateCode: this.state.stateCode
    };
    if (this.props.handleSearch) {
      this.props.handleSearch(filter);
    }
  }

  updateRepType(e) {
    this.setState({
      repType: e.target.value,
      submitted: false
    });
  }

  updateState(e) {
    this.setState({
      stateCode: e.target.value,
      submitted: false
    });
  }

  renderStateOptions() {
    return STATES.map((s) => <option key={ s.code } value={ s.code }>{ s.name }</option>)
  }

  renderErrorMessage() {
    return (
      <span className="warning">
        Please choose a representative type and a state
      </span>
    )
  }

  render() {
    return (
      <div className="Filters">
        <div>
          <select name="state" value={ this.state.stateCode } onChange={ this.updateState }>
            <option value="">Choose a state</option>
            { this.renderStateOptions() }
          </select>

          <select name="repType" value={ this.state.repType } onChange={ this.updateRepType }>
            <option value="">Choose a rep type</option>
            <option value="representative">Representative</option>
            <option value="senator">Senator</option>
          </select>

          <button onClick={ this.handleSearch }>Find</button>
        </div>
        <div className="warning-box">
          { this.state.submitted && (!this.state.repType || !this.state.stateCode)
            ? this.renderErrorMessage()
            : null }
        </div>
      </div>
    );
  }
}

export default Filters;
