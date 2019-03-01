import React from 'react'
import Layout2  from '../components/layout2'


import Main from '../components/Main'
import Footer from '../components/Footer'
import Transition from '../components/Transition'
import { navigate } from "gatsby"


class Layout extends React.Component {
  constructor(props , context) {
    super(props , context)
    this.state = {

    }
  }


  render() {
    return (
      <Layout2 location={this.props.location}>
        <div>
          <div id="wrapper">
            <Transition location={this.props.location}>
              {this.props.children}
            </Transition>
            <Footer />
          </div>
          <div id="bg"></div>
        </div>
      </Layout2>
    )
  }
}

export default Layout
