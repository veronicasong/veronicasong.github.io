import React from 'react'
import classnames from 'classnames'
import styles from './index.less'
import { withRouter } from 'react-router'
import Link from 'components/Link'
import menu from 'utils/menu'

@withRouter
export default class Layout extends React.Component {
  state = {
    menuOn: false,
  }

  handleToggleMenu = () => {
    this.setState(prevState => ({ ...prevState, menuOn: !prevState.menuOn }))
  }
  handleJump = () => {
    this.props.history.push('/')
  }

  handleMenuOn = e => {
    if (e.target !== this._menu) {
      return
    }
    this._top.style.top = '15px'
    this._middle.style.transform = 'rotate(90deg)'
    this._bottom.style.top = '15px'
  }

  handleMenuOff = e => {
    if (e.target !== this._menu) {
      return
    }
    this._top.style.top = '6px'
    this._middle.style.transform = 'rotate(0deg)'
    this._bottom.style.top = '24px'
  }

  handleMute = e => {
    e.stopPropagation()
  }

  render() {
    const { pathname } = this.props.location
    if (/^\/(console.*)$/.test(pathname)) {
      return this.props.children
    }
    const { menuOn } = this.state
    return (
      <div className={styles.container}>
        <div
          className={classnames(
            styles.header,
            !menuOn && pathname !== '/' ? styles.headerEmphasize : null
          )}
        >
          <div className={styles.logo} onClick={this.handleJump}>
            50 PERCENT
          </div>
          <div
            ref={ref => (this._menu = ref)}
            className={styles.menu}
            onClick={this.handleToggleMenu}
            onMouseEnter={this.handleMenuOn}
            onMouseLeave={this.handleMenuOff}
          >
            <span
              ref={ref => (this._top = ref)}
              className={styles.top}
              onMouseOver={this.handleMute}
              onMouseEnter={this.handleMute}
              onMouseOut={this.hanldeMute}
            />
            <span
              ref={ref => (this._middle = ref)}
              className={styles.middle}
              onMouseEnter={this.handleMute}
              onMouseOver={this.handleMute}
              onMouseOut={this.hanldeMute}
            />
            <span
              ref={ref => (this._bottom = ref)}
              className={styles.bottom}
              onMouseOver={this.handleMute}
              onMouseEnter={this.handleMute}
              onMouseOut={this.hanldeMute}
            />
          </div>
        </div>
        <div
          className={styles.mask}
          style={
            menuOn
              ? { zIndex: 40, backgroundColor: 'rgba(255,255,255,.9)', opacity: 1 }
              : { zIndex: -40, opacity: 0 }
          }
        >
          {menuOn &&
            menu.map((m, index) => (
              <Link
                style={{ top: 200 + index * 60, animationDelay: `${index * 70 + 70}ms` }}
                size="large"
                key={m.url}
                text={m.text}
                url={m.url}
                hook={this.handleToggleMenu}
              />
            ))}
        </div>
        {this.props.children}
      </div>
    )
  }
}
