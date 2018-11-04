import React from 'react'
import styles from './index.less'
import { connect } from 'dva'
import Gallery from 'components/Gallery'
import classnames from 'classnames'

/**
 * 分成左中右三个区域，左右点击进行图片切换
 */
@connect(({ common, loading }) => ({ loading, common }))
export default class ImageDetail extends React.Component {
  state = {
    position: {
      [-1]: 'beforeLeft',
      [0]: 'left',
      [1]: 'center',
      [2]: 'right',
      [3]: 'afterRight',
    },
    leftIndex: 0,
    centerIndex: 1,
    rightIndex: 2,
    leftImage: undefined,
    centerImage: undefined,
    rightImage: undefined,
    canSwitch: true,
    currentImageIndex: 0,
  }

  async componentDidMount() {
    this.props
      .dispatch({
        type: 'common/getMediaByCategory',
        payload: {
          category: this.props.location.query.category,
        },
      })
      .then(res => {
        const centerImage = res.find(i => i._id === this.props.location.query._id)
        const indexOfCenterImage = res.indexOf(centerImage)
        this.setState({ centerImage, currentImageIndex: indexOfCenterImage })
        if (indexOfCenterImage > 0) {
          this.setState({ leftImage: res[indexOfCenterImage - 1] })
        }

        if (indexOfCenterImage < res.length - 1) {
          this.setState({ rightImage: res[indexOfCenterImage + 1] })
        }
      })
  }

  generatePosition = (index, op) => {
    if (op === '+') {
      return index + 1 > 3 ? 0 : index + 1
    } else {
      return index - 1 < -1 ? 2 : index - 1
    }
  }

  /**
   * 点击不同 gallery 的运动方向
   * 0: 向右滑
   * 1: 不动
   * 2: 向左滑
   */
  getSwitchDirection = index => {
    if (index === 0) {
      return '+'
    } else if (index === 1) {
      return ''
    } else {
      return '-'
    }
  }

  handleSwitchGallery = op => {
    if (!op || !this.state.canSwitch) {
      return
    }
    const { leftIndex, rightIndex, centerIndex, currentImageIndex } = this.state
    const { lifestyle } = this.props.common
    if ((leftIndex === 0 && op === '-') || (leftIndex === 2 && op === '+')) {
      setTimeout(() => {
        this.setState({
          leftImage:
            op === '-' ? lifestyle[currentImageIndex + 2] : lifestyle[currentImageIndex - 2],
        })
      }, 700)
    }
    if ((rightIndex === 0 && op === '-') || (rightIndex === 2 && op === '+')) {
      setTimeout(() => {
        this.setState({
          rightImage:
            op === '-' ? lifestyle[currentImageIndex + 2] : lifestyle[currentImageIndex - 2],
        })
      }, 700)
    }
    if ((centerIndex === 0 && op === '-') || (centerIndex === 2 && op === '+')) {
      setTimeout(() => {
        this.setState({
          centerImage:
            op === '-' ? lifestyle[currentImageIndex + 2] : lifestyle[currentImageIndex - 2],
        })
      }, 700)
    }
    this.setState({
      leftIndex: this.generatePosition(leftIndex, op),
      centerIndex: this.generatePosition(centerIndex, op),
      rightIndex: this.generatePosition(rightIndex, op),
      currentImageIndex: op === '+' ? currentImageIndex - 1 : currentImageIndex + 1,
    })
  }

  handleDisableClick = () => {
    this.setState({ canSwitch: false })
  }

  handleFixPosition = key => {
    if (this.state[key] === -1) {
      this.setState({ [key]: 2 })
    } else if (this.state[key] === 3) {
      this.setState({ [key]: 0 })
    }
    this.setState({ canSwitch: true })
  }

  render() {
    const {
      centerImage,
      leftImage,
      rightImage,
      leftIndex,
      rightIndex,
      centerIndex,
      position,
      currentImageIndex,
    } = this.state
    const { lifestyle } = this.props.common
    return (
      <div className={styles.container} ref={ref => (this._container = ref)}>
        <div
          className={classnames(styles[position[leftIndex]], styles.gallery)}
          onAnimationStart={this.handleDisableClick}
          onAnimationEnd={this.handleFixPosition.bind(this, 'leftIndex')}
          style={leftImage ? { visibility: 'visible' } : { visibility: 'hidden' }}
        >
          {leftImage && (
            <Gallery
              isCurrent={currentImageIndex === lifestyle.indexOf(leftImage)}
              key="left"
              image={leftImage}
              switchCallback={this.handleSwitchGallery.bind(
                this,
                this.getSwitchDirection(leftIndex)
              )}
            />
          )}
        </div>
        <div
          className={classnames(styles[position[centerIndex]], styles.gallery)}
          onAnimationStart={this.handleDisableClick}
          onAnimationEnd={this.handleFixPosition.bind(this, 'centerIndex')}
          style={centerImage ? { visibility: 'visible' } : { visibility: 'hidden' }}
        >
          {centerImage && (
            <Gallery
              isCurrent={currentImageIndex === lifestyle.indexOf(centerImage)}
              key="center"
              image={centerImage}
              switchCallback={this.handleSwitchGallery.bind(
                this,
                this.getSwitchDirection(centerIndex)
              )}
            />
          )}
        </div>
        <div
          className={classnames(styles[position[rightIndex]], styles.gallery)}
          onAnimationStart={this.handleDisableClick}
          onAnimationEnd={this.handleFixPosition.bind(this, 'rightIndex')}
          style={rightImage ? { visibility: 'visible' } : { visibility: 'hidden' }}
        >
          {rightImage && (
            <Gallery
              isCurrent={currentImageIndex === lifestyle.indexOf(rightImage)}
              key="right"
              image={rightImage}
              switchCallback={this.handleSwitchGallery.bind(
                this,
                this.getSwitchDirection(rightIndex)
              )}
            />
          )}
        </div>
      </div>
    )
  }
}
