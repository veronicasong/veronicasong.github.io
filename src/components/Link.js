import React from 'react'
import propTypes from 'prop-types'
import { withRouter } from 'react-router'
import styles from './Link.less'

@withRouter
export default class Link extends React.Component {
  static propTypes = {
    text: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    style: propTypes.object,
    size: propTypes.string,
    hook: propTypes.func,
  }

  static defaultProps = {
    text: 'link',
    url: '',
    size: 'default',
    style: {},
    hook: () => {},
  }

  state = {
    underlined: false,
    FONT_SIZE: {
      small: '18px',
      default: '24px',
      large: '30px',
    },
  }

  handleJump = () => {
    const { hook, history, location, url } = this.props
    if (location.pathname !== url) {
      hook()
      history.push(url)
    }
  }

  toggleUnderline = () => {
    this.setState({ underlined: !this.state.underlined })
  }

  render() {
    const { underlined, FONT_SIZE } = this.state
    const { style, text, size } = this.props
    return (
      <span className={styles.container} style={{ ...style }}>
        <span
          onClick={this.handleJump}
          className={styles.link}
          onMouseOver={this.toggleUnderline}
          onMouseLeave={this.toggleUnderline}
          style={{ fontSize: FONT_SIZE[size] }}
        >
          {text.toUpperCase()}
        </span>
        <span className={styles.underline} style={underlined ? { width: '96%' } : { width: 0 }} />
      </span>
    )
  }
}
