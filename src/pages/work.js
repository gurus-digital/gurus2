import React from 'react'
import { Link } from 'gatsby'
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

import album01 from '../images/work/Gurus-Portfolio-01.jpg'
import album02 from '../images/work/Gurus-Portfolio-02.jpg'
import album03 from '../images/work/Gurus-Portfolio-03.jpg'
import album04 from '../images/work/Gurus-Portfolio-04.png'
import album05 from '../images/work/Gurus-Portfolio-05.jpg'
import album06 from '../images/work/Gurus-Portfolio-06.jpg'
import album07 from '../images/work/Gurus-Portfolio-07.jpg'
import album08 from '../images/work/Gurus-Portfolio-08.jpg'
import album09 from '../images/work/Gurus-Portfolio-09.jpg'
import album10 from '../images/work/Gurus-Portfolio-10.jpg'
import album11 from '../images/work/Gurus-Portfolio-11.jpg'
import album12 from '../images/work/Gurus-Portfolio-12.jpg'
import album13 from '../images/work/Gurus-Portfolio-13.jpg'
import album14 from '../images/work/Gurus-Portfolio-14.png'
import album15 from '../images/work/Gurus-Portfolio-15.png'

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
        <Coverflow
          width={1200}
          height={600}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          active={this.state.active}
          currentFigureScale={2.0}
          otherFigureScale={.9}
        >
          <img src={album01}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album02}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album03}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album04}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album05}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album06}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album07}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album08}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album10}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album11}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album12}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album13}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album14}  alt='Album two' data-action="http://passer.cc"/>
          <img src={album15}  alt='Album two' data-action="http://passer.cc"/>
        </Coverflow>
      </div>
    )
  }
}

export default Intro
