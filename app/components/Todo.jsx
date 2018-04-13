import React from 'react';

class Todo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      agreed: null
    }

    this.handleAgreeChange=this.handleAgreeChange.bind(this)
  }
  handleAgreeChange(evt) {
    this.setState({	agreed:	evt.target.checked	});
  }
  render() {
    return(
      <div>
        <input
          type="checkbox"
          checked={this.state.agreed}
          onChange={this.handleAgreeChange}
        />
      <label>
        {this.state.agreed ? <del> {this.props.text} </del> : <p>{this.props.text}</p>}
      </label>
      </div>
    )
  }
}

module.exports = Todo;
