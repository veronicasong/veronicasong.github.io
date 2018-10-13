import React from 'react'
import styles from './index.less'
import { withRouter } from 'react-router'
import Link from 'components/Link'
import menu from 'utils/menu'

@withRouter
export default class Layout extends React.Component {

  handleJump = () => {
    this.props.history.push('/')
  }

  render() {
    if (this.props.location.pathname === '/') {
      return this.props.children
    }
    return (
      <div className={styles.container}>
        <div className={styles.navigator}>
          <div className={styles.bold} onClick={this.handleJump}>50 percent</div>
          {
            menu.map((m, index) => (
              <Link url={m.url} text={m.text} key={index} />
            ))
          }
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }

}