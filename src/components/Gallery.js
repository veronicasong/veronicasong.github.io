import React from 'react'
import propTypes from 'prop-types'
import styles from './Gallery.less'
import ImgLoader from './ImgLoader'
import { connect } from 'dva'

@connect(({ loading }) => ({ loading }))
export default class Gallery extends React.Component {
  static propTypes = {
    image: propTypes.object.isRequired,
  }

  static defaultProps = {
    image: {},
  }

  state = {
    claps: 0,
    favs: 0,
    imageId: undefined,
    isAddingClap: false,
    isAddingFav: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.image._id !== prevState.imageId) {
      return {
        claps: nextProps.image.meta.claps,
        favs: nextProps.image.meta.favs,
        imageId: nextProps.image._id,
      }
    } else {
      return {}
    }
  }

  handleSwitch = () => {
    this.props.switchCallback()
  }

  handleClap = e => {
    e.stopPropagation()
    this.setState({ isAddingClap: true })
    this.props.dispatch({
      type: 'common/clap',
      payload: {
        _id: this.props.image._id,
        category: this.props.image.category,
      },
    })
    setTimeout(() => {
      this.setState({ isAddingClap: false })
      this.setState({ claps: this.state.claps + 1 })
    }, 200)
  }

  handleFavs = e => {
    e.stopPropagation()
    this.setState({ isAddingFav: true })
    this.props.dispatch({
      type: 'common/favs',
      payload: {
        _id: this.props.image._id,
        category: this.props.image.category,
      },
    })
    setTimeout(() => {
      this.setState({ isAddingFav: false })
      this.setState({ favs: this.state.favs + 1 })
    }, 200)
  }

  render() {
    const { image, isCurrent, loading } = this.props
    const { claps, favs, isAddingClap, isAddingFav } = this.state
    return (
      <div className={styles.container} onClick={this.handleSwitch}>
        <ImgLoader image={image} size="large" hasNote={false} noClick />
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.title}>{image.title}</div>
            <div className={styles.description}>{image.description}</div>
          </div>

          <div className={styles.right}>
            <div className={styles.statistics} onClick={this.handleClap}>
              <span>👏</span>
              <span
                className={isAddingClap ? styles.animateAddUp : null}
                onAnimationStart={e => e.stopPropagation()}
              >
                {claps}
              </span>
            </div>
            <div className={styles.statistics} onClick={this.handleFavs}>
              <span>❤️</span>
              <span
                className={isAddingFav ? styles.animateAddUp : null}
                onAnimationStart={e => e.stopPropagation()}
              >
                {favs}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
