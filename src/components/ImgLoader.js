import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import styles from './ImgLoader.less'

export default class ImgLoader extends React.Component {
  state = {
    loaded: false
  }

  handleOnLoad = () => {
    this.setState({ loaded: true })
    this.props.setLoaded && this.props.setLoaded()
  }

  onStart = el => {
    el.style.zIndex = 10
  }

  onComplete = el => {
    el.style.zIndex = ""
    this.props.onComplete && this.props.onComplete()
  }

  render = () => {
    const { loaded } = this.state
    const { color, url, revealRef, index } = this.props
    return (
      <div className={styles.grid} ref={revealRef}>
        {
          loaded ? null : <div className={styles.mask} style={{ backgroundColor: color }}></div>
        }

        <Flipped
          flipId={`img-${index}`}
          onStart={this.onStart}
          onComplete={this.onComplete}
        >
          <img className={styles.gridImg} src={url} onLoad={this.handleOnLoad} />
        </Flipped>

      </div>
    )
  }
}