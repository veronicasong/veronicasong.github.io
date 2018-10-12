import styles from "./index.css"

import React, { Component } from "react"
import { Flipper, Flipped } from 'react-flip-toolkit'
import detail1Img from "./assets/detail-1.jpg"
import detail5Img from "./assets/detail-5.jpg"
import detail6Img from "./assets/detail-6.jpg"
import detail8Img from "./assets/detail-8.jpg"

const data = [
  { img: detail1Img, title: "The Great Outdoors" },
  { img: detail5Img, title: "The Hills are Alive" },
  { img: detail8Img, title: "Tree in The Fog" },
  { img: detail6Img, title: "What a Mountain" }
]

class PhotoGrid extends Component {

  applyZIndex = el => {
    el.style.zIndex = 3
  }

  removeZIndex = el => {
    el.style.zIndex = ""
  }

  state = { focused: false }

  togglefocused = () => {
    this.setState({ focused: !this.state.focused })
  }
  render() {
    const { focused } = this.state

    return (
      <div className={styles.photoGridExample}>
        <Flipper flipKey={focused}>
          <div className={styles.photoGrid}>
            {data.map((d, i) => {
              return (
                <div key={i}>
                  {i !== focused && (
                    <div
                      className={styles.photoGridSquare}
                      onClick={() => {
                        this.setState({ focused: i })
                      }}
                    >
                      <Flipped
                        flipId={`img-${i}`}
                        onStart={this.applyZIndex}
                        onComplete={this.removeZIndex}
                      >
                        <img src={d.img} alt="" className={styles.photoGridImg} />
                      </Flipped>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {typeof focused === "number" && (
            <div
              className={styles.photoGridSquareExpanded}
              onClick={() => {
                this.setState({ focused: null })
              }}
            >
              <Flipped
                flipId={`img-${focused}`}
                onStart={this.applyZIndex}
              // onComplete={this.removeZIndex}
              >
                <img src={data[focused].img} alt="" className={styles.photoGridImg} />
              </Flipped>
            </div>
          )}
        </Flipper>
      </div>
    )
  }
}

export default PhotoGrid