import React from 'react'
import { Link } from 'gatsby'
// import github from '../../img/github-icon.svg'
import logo from '../../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="navbar-inner">
          <div className="navbar-logo">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi"/>
            </Link>
          </div>
          <ul className="navbar-list">
            <li className="navbar-list_item">
              <Link className="navbar-anchor" activeClassName="_active" to="/about">
                About
              </Link>
            </li>
            <li className="navbar-list_item">
              <Link className="navbar-anchor" activeClassName="_active" to="/blog">
                Blog
              </Link>
            </li>
            <li className="navbar-list_item">
              <Link className="navbar-anchor" activeClassName="_active" to="/contact/examples">
                Form Examples
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
