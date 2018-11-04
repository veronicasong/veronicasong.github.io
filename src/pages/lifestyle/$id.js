import React from 'react'
import styles from './detail.less'

export default class ImageDetail extends React.Component {
  async componentDidMount() {
    console.log('this.props : ', this.props)
    // this.props
    //   .dispatch({
    //     type: 'common/getMediaByCategory',
    //     payload: {
    //       category: 'lifestyle',
    //     },
    //   })
    //   .then(res => {
    //     this.setState({ loaded: new Array(res.length).fill(0) })
    //     res.forEach(m => {
    //       ScrollReveal().reveal(this[`ref_${m._id}`], {
    //         delay: 300,
    //         container: this.ref_container,
    //       })
    //     })
    //   })
  }
  render() {
    return <div className={styles.container}>123</div>
  }
}
