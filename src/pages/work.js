import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';


class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }

  // var fn = function () {  }

  render() {
    return (
      <div>
      <Link to="/">home</Link>
        
      </div>
    )
  }
}

export default Intro
