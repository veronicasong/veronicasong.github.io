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
    const { image, revealRef, index, expanded } = this.props
    return (
      <div className={expanded ? styles.grid : `${styles.grid} ${styles.gridWithHover}`} ref={revealRef}>
        {
          loaded ? null : <div className={styles.mask} style={{ backgroundColor: image.color }}></div>
        }

        <Flipped
          flipId={`img-${index}`}
          onStart={this.onStart}
          onComplete={this.onComplete}
        >
          <img className={expanded ? styles.expandedImg : styles.gridImg} src={image.url} onLoad={this.handleOnLoad} />
        </Flipped>

      </div>
    )
  }
}