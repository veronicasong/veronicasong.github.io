// import './theme.less'
import styles from './index.less';
import Typewriter from 'typewriter-effect/dist/core';
import Link from 'components/Link'
import ScrollReveal from 'scrollreveal'
import menu from 'utils/menu'

export default class HomePage extends React.Component {
  state = {
    slogon: ['50', 'percent', 'of', 'art', '50', 'percent', 'of', 'tech']
  }

  _logoWriter = null

  _slogonWriter = null

  componentDidMount() {
    this._logoWriter = new Typewriter(this.logo, {
      // cursor: ''
    })
    this._logoWriter.typeString('50 PERCENT').start().pauseFor(10).callFunction(this.writeSlogon)
  }

  writeSlogon = () => {
    this.state.slogon.forEach((text, index) => {
      ScrollReveal().reveal(this[`slogon${index}`], { delay: index * 200 })
    })
    // this._slogonWriter = new Typewriter(this.slogon, {
    //   cursor: ''
    // })
    // this._slogonWriter.typeString('50 percent of art / 50 percent of tech').callFunction(this.writeMenu).start()
  }

  writeMenu = () => {
    // ScrollReveal().reveal(this.menu)
  }

  render() {
    const { slogon } = this.state
    return (
        <div className={styles['container']}>
          <div className={styles.wrapper}>
          <div className={styles.logo} ref={ref => this.logo = ref}></div>
          <div className={styles.slogonContainer}>
          {
            slogon.map((text, index) => (
              <div className={styles.slogon} ref={ref => this[`slogon${index}`] = ref} key={index}>{text}</div>
            ))
          }
          </div>
          {/* <div className={styles.slogon} ref={ref => this.slogon = ref}></div> */}
          </div>
          <div className={styles.menu} ref={ref => this.menu = ref}>
            {
              menu.map((m, index) => (
                <Link url={m.url} text={m.text} key={index} /> 
              ))
            }
          </div>
        </div>
    );
  }

}