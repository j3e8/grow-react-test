import React from 'react';

class RepInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rep && nextProps.rep.name) {
      let fn = nextProps.rep.name;
      let ln;
      let pos = nextProps.rep.name.lastIndexOf(' ');
      if (pos != -1) {
        fn = nextProps.rep.name.substring(0, pos);
        ln = nextProps.rep.name.substring(pos + 1);
      }
      this.setState({
        firstName: fn,
        lastName: ln
      })
    }
  }

  render() {
    if (!this.props.rep) {
      return null;
    }

    return (
      <div className="RepInfo">
        <h2>Info</h2>
        <div className="fact">
          <label>First name</label>
          <span>{ this.state.firstName }</span>
        </div>
        <div className="fact">
          <label>Last name</label>
          <span>{ this.state.lastName }</span>
        </div>
        <div className="fact">
          <label>District</label>
          <span>{ this.props.rep.district }</span>
        </div>
        <div className="fact">
          <label>Phone</label>
          <span>{ this.props.rep.phone }</span>
        </div>
        <div className="fact">
          <label>Office</label>
          <span>{ this.props.rep.office }</span>
        </div>
        <div className="site-link">
          <a href={ this.props.rep.link } target="_blank">{ this.props.rep.link }</a>
        </div>
      </div>
    )
  }
}

export default RepInfo;
