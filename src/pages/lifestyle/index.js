import React from 'react'
import ScrollReveal from 'scrollreveal'
import styles from './index.less'
import ImgLoader from 'components/ImgLoader'
import { connect } from 'dva'

@connect(({ common, loading }) => ({ loading, common }))
export default class LifestyleContainer extends React.Component {
  state = {
    loaded: [],
  }

  async componentDidMount() {
    this.props
      .dispatch({
        type: 'common/getMediaByCategory',
        payload: {
          category: 'lifestyle',
        },
      })
      .then(res => {
        this.setState({ loaded: new Array(res.length).fill(0) })
        res.forEach(m => {
          ScrollReveal().reveal(this[`ref_${m._id}`], {
            delay: 300,
            container: this.ref_container,
          })
        })
      })
  }

  handleSetLoaded = index => {
    const newLoaded = this.state.loaded
    newLoaded[index] = 1
    this.setState({ loaded: newLoaded })
  }

  getImageSize = index => {
    console.log('index : ')
    if (!this.props.lifestyle) {
      return
    }
    const length = this.props.lifestyle.length
    if (!(index % 3)) {
      console.log('d : ')
      return length % 4 === 3 ? 'small' : 'large'
    } else {
      console.log('s : ')
      return length % 4 === 3 ? 'large' : 'small'
    }
  }

  render() {
    const {
      common: { lifestyle },
    } = this.props
    if (!lifestyle) {
      return null
    }
    return (
      <div className={styles.container} ref={ref => (this.ref_container = ref)}>
        <div className={styles.title}>Lifestyle</div>
        <div className={styles.imgContainer}>
          <div className={styles.left}>
            {lifestyle &&
              lifestyle.map(
                (i, index) =>
                  !(index % 2) ? (
                    <ImgLoader
                      key={i._id}
                      revealRef={ref => (this[`ref_${i._id}`] = ref)}
                      image={i}
                      hasNote
                      size={
                        index % 3 === 0
                          ? lifestyle.length % 4 === 3
                            ? 'small'
                            : 'medium'
                          : lifestyle.length % 4 === 3
                            ? 'medium'
                            : 'small'
                      }
                    />
                  ) : null
              )}
          </div>
          <div className={styles.right}>
            {lifestyle &&
              lifestyle.map(
                (i, index) =>
                  index % 2 ? (
                    <ImgLoader
                      key={i._id}
                      revealRef={ref => (this[`ref_${i._id}`] = ref)}
                      image={i}
                      hasNote
                      size={
                        index % 3 === 0
                          ? lifestyle.length % 4 === 3
                            ? 'small'
                            : 'medium'
                          : lifestyle.length % 4 === 3
                            ? 'medium'
                            : 'small'
                      }
                    />
                  ) : null
              )}
          </div>
        </div>
      </div>
    )
  }
}
