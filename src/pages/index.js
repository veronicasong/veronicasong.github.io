import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'
import styles from './index.less'
import { withRouter } from 'react-router'
import { ReactComponent as ArrowDown } from 'resources/svg/arrow-down.svg'
import { ReactComponent as ArrowUp } from 'resources/svg/arrow-up.svg'

@withRouter
export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCase: 1,
      MAX_NUM: 3,
    }

    this.performSlideUpWithThrottle = _.throttle(this.performSlideUp, 1800, { trailing: false })
  }

  componentDidMount() {
    console.log(
      '%c50% OF ART 🎨 50% OF TECH 🖥',
      'text-shadow: 1px 1px #7C3F31;color:#BCA598;font-size:30px;padding: 30px;'
    )
  }

  handleSlide = e => {
    e.persist()
    this.performSlideUpWithThrottle(e.deltaY)
  }

  performSlideUp = deltaY => {
    const { currentCase, MAX_NUM } = this.state
    if (deltaY > 0 && currentCase < MAX_NUM) {
      this._container.style.transform = `translateY(${-100 * currentCase}vh)`
      this.setState({ currentCase: currentCase + 1 })
      this._case1.style.transform = 'scale(.92)'
      this._case2.style.transform = 'scale(.92)'
      this._case3.style.transform = 'scale(.92)'
    } else if (deltaY < 0 && currentCase > 1) {
      this._container.style.transform = `translateY(${(2 - currentCase) * 100}vh)`
      this.setState({ currentCase: currentCase - 1 })
      this._case1.style.transform = 'scale(.92)'
      this._case2.style.transform = 'scale(.92)'
      this._case3.style.transform = 'scale(.92)'
    } else {
      return
    }
  }

  handleSlideEnd = e => {
    if (e.target != this._container) {
      return
    }
    this._case1.style.transform = 'scale(1)'
    this._case2.style.transform = 'scale(1)'
    this._case3.style.transform = 'scale(1)'
  }

  handleJump = path => {
    this.props.history.push(path)
  }

  render() {
    const { currentCase, MAX_NUM } = this.state
    return (
      <div className={styles.containerWrapper}>
        <div className={styles.arrow}>
          {currentCase > 1 ? (
            <ArrowUp onClick={this.performSlideUp.bind(this, -1)} />
          ) : (
            <ArrowUp style={{ opacity: 0 }} />
          )}
          {currentCase < MAX_NUM ? (
            <ArrowDown onClick={this.performSlideUp.bind(this, 1)} />
          ) : (
            <ArrowDown style={{ opacity: 0 }} />
          )}
        </div>
        <div
          className={styles.container}
          onWheel={this.handleSlide}
          onTransitionEnd={this.handleSlideEnd}
          ref={ref => (this._container = ref)}
        >
          <div className={styles.case} ref={ref => (this._case1 = ref)}>
            <div className={styles.left}>
              <span
                onClick={this.handleJump.bind(this, '/paintings')}
                className={styles.title}
                style={{ borderColor: '#935443' }}
              >
                PAINTINGS
              </span>
              <span className={styles.description}>培英汀泗</span>
            </div>
            <div className={classnames(styles.right, styles.right1)} />
          </div>
          <div className={styles.case} ref={ref => (this._case2 = ref)}>
            <div className={styles.left}>
              <span
                onClick={this.handleJump.bind(this, '/lifestyle')}
                className={styles.title}
                style={{ borderColor: '#A4B2B2' }}
              >
                LIFESTYLE
              </span>
              <span className={styles.description}>莱芙丝黛尔</span>
            </div>
            <div className={classnames(styles.right, styles.right2)} />
          </div>
          <div className={styles.case} ref={ref => (this._case3 = ref)}>
            <div className={styles.left}>
              <span
                onClick={this.handleJump.bind(this, '/vlog')}
                className={styles.title}
                style={{ borderColor: '#BC5444' }}
              >
                VLOG
              </span>
              <span className={styles.description}>弗洛格</span>
            </div>
            <div className={classnames(styles.right, styles.right3)} />
          </div>
        </div>
      </div>
    )
  }
}
