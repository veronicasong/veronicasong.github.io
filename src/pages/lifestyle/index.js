import React from 'react'
import { Flipper } from 'react-flip-toolkit'
import ScrollReveal from 'scrollreveal'
import CommonService from 'services/common'
import styles from './index.less'
import ImgLoader from 'components/ImgLoader'

export default class LifestyleContainer extends React.Component {
  state = {
    lifeStyleList: [],
    focused: null,
    mock: [{
      url: '',
      name: '1',
      color: '#d4cfc1'
    }, {
      url: '',
      name: '2',
      color: '#e4cfc1'
    }, {
      url: '',
      name: '3',
      color: '#a4cfc1'
    }, {
      url: '',
      name: '4',
      color: '#b4cfc1'
    }]
  }

  async componentDidMount() {
    const lifeStyleList = await CommonService.getListByCategory('lifestyle')
    this.setState({ lifeStyleList, loaded: new Array(lifeStyleList.length).fill(0) })
    lifeStyleList.forEach((m, index) => {
      ScrollReveal().reveal(this[`lifestyle${index}Ref`], { delay: 300, container: this.revealContainer })
    });
  }

  toggleExpand = focused => {
    if (focused !== null && !this.state.loaded[focused]) {
      return
    }
    this.setState({ focused })
  }

  animateIn = () => {
    console.log('this.blurRef : ', this.blurRef );
    this.blurRef.style.filter = 'blur(10px)'
    this.blurRef.style.backgroundColor = 'rgba(233, 233, 233, .8)'
  }

  handleSetLoaded = index => {
    const newLoaded = this.state.loaded
    newLoaded[index] = 1
    this.setState({ loaded: newLoaded })
  }

  render() {
    const { lifeStyleList, focused } = this.state
    return (
      <Flipper flipKey={focused}>
        <div className={styles.container} ref={ref => this.revealContainer = ref}>
          {
            lifeStyleList.map((lifestyle, index) => (
              <div key={index} className={styles.imgContainer} onClick={this.toggleExpand.bind(this, index)}>
                {
                  focused !== index &&
                  <ImgLoader 
                    setLoaded={this.handleSetLoaded.bind(this, index)} 
                    index={index} 
                    image={lifestyle}
                    revealRef={ref => this[`lifestyle${index}Ref`] = ref} 
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
                image={lifeStyleList[focused]}
                onComplete={this.animateIn}
              />
            </div>
          }
        </div>
      </Flipper>
    )
  }
}

