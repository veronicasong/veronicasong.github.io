import React from 'react'
import { withRouter } from "react-router";
import styles from './Link.less'

@withRouter
export default class Link extends React.Component {
  state = {
    underlined: false,
  }

  handleJump = () => {
    const { history, location, url } = this.props
    if (location.pathname !== url) {
      history.push(url)
    }
  }

  toggleUnderline = () => {
    this.setState({ underlined: !this.state.underlined })
  }

  render() {
    const { underlined } = this.state
    const { text } = this.props
    return (
      <span className={styles.container}>
        <span onClick={this.handleJump} className={styles.link} onMouseOver={this.toggleUnderline} onMouseLeave={this.toggleUnderline}>{text}</span>
        <span className={styles.underline} style={ underlined ? { width: '100%' } : { width: 0 }}></span>
      </span>
    )
  }
}