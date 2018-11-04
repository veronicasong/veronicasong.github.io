// import './theme.less'
import styles from "./index.less";
import Typewriter from "typewriter-effect/dist/core";
import Link from "components/Link";
import ScrollReveal from "scrollreveal";
import menu from "utils/menu";

export default class HomePage extends React.Component {
  state = {
    slogan: ["50", "percent", "of", "art", "50", "percent", "of", "tech"]
  };

  _logoWriter = null;

  _sloganWriter = null;

  componentDidMount() {
    this._logoWriter = new Typewriter(this.logo, {
      // cursor: ''
    });
    this._logoWriter
      .typeString("50 PERCENT")
      .start()
      .pauseFor(10)
      .callFunction(this.writeslogan);
  }

  writeslogan = () => {
    this.state.slogan.forEach((text, index) => {
      ScrollReveal().reveal(this[`slogan${index}`], { delay: index * 200 });
    });
    // this._sloganWriter = new Typewriter(this.slogan, {
    //   cursor: ''
    // })
    // this._sloganWriter.typeString('50 percent of art / 50 percent of tech').callFunction(this.writeMenu).start()
  };

  writeMenu = () => {
    // ScrollReveal().reveal(this.menu)
  };

  render() {
    const { slogan } = this.state;
    return (
      <div className={styles["container"]}>
        <div className={styles.wrapper}>
          <div className={styles.logo} ref={ref => (this.logo = ref)} />
          <div className={styles.sloganContainer}>
            {slogan.map((text, index) => (
              <div
                className={styles.slogan}
                ref={ref => (this[`slogan${index}`] = ref)}
                key={index}
              >
                {text}
              </div>
            ))}
          </div>
          {/* <div className={styles.slogan} ref={ref => this.slogan = ref}></div> */}
        </div>
        <div className={styles.menu} ref={ref => (this.menu = ref)}>
          {menu.map((m, index) => (
            <Link url={m.url} text={m.text} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
