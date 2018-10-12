import React from 'react'
import { Flipper } from 'react-flip-toolkit'
import ScrollReveal from 'scrollreveal'
import CommonService from 'services/common'
import styles from './index.less'
import ImgLoader from 'components/ImgLoader'

export default class MealContainer extends React.Component {
  state = {
    mealList: [],
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
    const mealList = await CommonService.getListByCategory('meals')
    // const mealList = this.state.mock
    this.setState({ mealList, loaded: new Array(mealList.length).fill(0) })
    mealList.forEach((m, index) => {
      ScrollReveal().reveal(this[`meal${index}Ref`], { delay: 300 })
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
    this.blurRef.style.backgroundColor = 'rgba(233, 233, 233, .5)'
  }

  handleSetLoaded = index => {
    const newLoaded = this.state.loaded
    newLoaded[index] = 1
    this.setState({ loaded: newLoaded })
  }

  render() {
    const { mealList, focused } = this.state
    return (
      <Flipper flipKey={focused}>
        <div className={styles.container}>
          {
            mealList.map((meal, index) => (
              <div key={index} className={styles.imgContainer} onClick={this.toggleExpand.bind(this, index)}>
                {
                  focused !== index &&
                  <ImgLoader 
                    setLoaded={this.handleSetLoaded.bind(this, index)} 
                    index={index} 
                    key={meal.name} 
                    url={meal.url} 
                    color={meal.color} 
                    revealRef={ref => this[`meal${index}Ref`] = ref} 
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
                // setLoaded={this.handleSetLoaded.bind(this, focused)} 
                index={focused} 
                key={mealList[focused].name} 
                url={mealList[focused].url} 
                color={mealList[focused].color} 
                onComplete={this.animateIn}
              />
            </div>
          }
        </div>
      </Flipper>
    )
  }
}

