import React from 'react'
import { Flipper } from 'react-flip-toolkit'
import ScrollReveal from 'scrollreveal'
import CommonService from 'services/common'
import styles from './index.less'
import ImgLoader from 'components/ImgLoader'
import { connect } from 'dva'

@connect(({ common, loading }) => ({ loading, common }))
export default class LifestyleContainer extends React.Component {
  state = {
    lifeStyleList: [],
    focused: null,
    loaded: []
  }

  async componentDidMount() {
    this.props.dispatch({
      type: 'common/getMediaByCategory',
      payload: {
        category: 'lifestyle'
      }
    }).then(res => {
      this.setState({ loaded: new Array(res.length).fill(0) })
      // this.setState({ lifeStyleList: res, loaded: new Array(res.length).fill(0) })
      res.forEach(m => {
        ScrollReveal().reveal(this[`ref_${m._id}`], { delay: 300, container: this.revealContainer })
      });
    })
  }

  toggleExpand = focused => {
    if (focused !== null && !this.state.loaded[focused]) {
      return
    }
    this.setState({ focused })
  }

  animateIn = () => {
    this.blurRef.style.filter = 'blur(10px)'
    this.blurRef.style.backgroundColor = 'rgba(233, 233, 233, .8)'
  }

  handleSetLoaded = index => {
    const newLoaded = this.state.loaded
    newLoaded[index] = 1
    this.setState({ loaded: newLoaded })
  }

  render() {
    // const { lifeStyleList, focused } = this.state
    const { focused } = this.state
    const { common: { lifestyle } } = this.props
    if (!lifestyle) {
      return null
    }
    return (
      <Flipper flipKey={focused}>
        <div className={styles.container} ref={ref => this.revealContainer = ref}>
          {
            lifestyle.map((lifestyle, index) => (
              <div key={index} className={styles.imgContainer} onClick={this.toggleExpand.bind(this, index)}>
                {
                  focused !== index &&
                  <ImgLoader 
                    setLoaded={this.handleSetLoaded.bind(this, index)} 
                    index={index} 
                    image={lifestyle}
                    revealRef={ref => this[`ref_${lifestyle._id}`] = ref} 
                  />
                }
              </div>
            ))
          }
          {
            typeof focused === 'number' &&
            <div className={styles.imgExpandContainer} onClick={this.toggleExpand.bind(this, null)}>
              <div className={styles.blur} ref={ref => this.blurRef = ref}></div>
              <ImgLoader 
                expanded={true}
                index={focused} 
                image={lifestyle[focused]}
                onComplete={this.animateIn}
              />
            </div>
          }
        </div>
      </Flipper>
    )
  }
}

