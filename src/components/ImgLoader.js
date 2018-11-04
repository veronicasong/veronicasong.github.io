import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { withRouter } from 'react-router'
import styles from './ImgLoader.less'
import { ReactComponent as TitleIcon } from 'resources/svg/lifestyle-title.svg'

@withRouter
export default class ImgLoader extends React.Component {
  static propTypes = {
    image: propTypes.object.isRequired,
    size: propTypes.string.isRequired,
    hasNote: propTypes.bool,
    noClick: propTypes.bool,
    revealRef: propTypes.any,
  }

  static defaultProps = {
    image: {
      url: '',
      color: '',
    },
    size: 'large',
    hasNote: true,
    noClick: false,
    revealRef: undefined,
  }

  state = {
    loaded: false,
  }

  handleOnLoad = () => {
    this.setState({ loaded: true })
    this.props.setLoaded && this.props.setLoaded()
  }

  handleJumpToDetail = () => {
    !this.props.noClick &&
      this.props.history.push(
        'detail?category=' + this.props.image.category + '&_id=' + this.props.image._id
      )
  }

  render = () => {
    const { loaded } = this.state
    const { noClick, hasNote, image, size, revealRef } = this.props
    return (
      <div
        className={classnames(styles.grid, styles[size])}
        ref={revealRef}
        onClick={this.handleJumpToDetail}
        style={noClick ? { cursor: 'default' } : { cursor: 'pointer' }}
      >
        {loaded ? null : <div className={styles.mask} style={{ backgroundColor: image.color }} />}
        <img className={styles.gridImg} src={image.url} onLoad={this.handleOnLoad} />
        {hasNote ? (
          <div className={styles.noteBackground}>
            <div className={styles.note}>
              <div>
                <TitleIcon />
                {image.title || 'By Veronica'}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
