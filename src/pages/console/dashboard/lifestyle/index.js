import React from 'react'
import styles from './index.less'
import { connect } from 'dva';
import { Button, Icon } from 'antd'
import EditDrawer from 'components/EditDrawer'

@connect(({ loading, common }) => ({ loading, common }))
export default class Lifestyle extends React.Component {
  state = {
    drawerVisible: false,
    currentMedia: { _id: Date.now() },
    mode: 'upload'
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    this.props.dispatch({
      type: 'common/getMediaByCategory',
      payload: {
        console: true,
        category: 'lifestyle'
      }
    })
  }

  handleEdit = currentMedia => {
    this.setState({ currentMedia, mode: 'edit'}, () => this.handleDrawerVisible(true))
  }

  handleUpload = () => {
    this.setState({ currentMedia: { _id: Date.now() }, mode: 'upload'}, () => this.handleDrawerVisible(true))
  }

  handleDrawerVisible = drawerVisible => {
    this.setState({ drawerVisible })
  }

  handleDrawerClose = refresh => {
    this.handleDrawerVisible(false)
    refresh && this.getData()
  }

  render() {
    const { common: { lifestyle } } = this.props
    const { drawerVisible, currentMedia, mode } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.header}>Lifestyle</div>
        <div className={styles.operation}>
          <Button type="primary" onClick={this.handleUpload}>Upload</Button>
        </div>

        <div className={styles.mediaList}>
          {
            lifestyle && lifestyle.map((l, index) => (
              <div className={styles.imgWrapper} key={index} onClick={this.handleEdit.bind(this, l)}>
                <div className={styles.mask}><Icon type="edit" /></div>
                <img className={styles.img} src={l.url} />
              </div>
            ))
          }
        </div>


        <EditDrawer 
          key={currentMedia._id} 
          visible={drawerVisible} 
          onClose={this.handleDrawerClose} 
          media={currentMedia} 
          mode={mode} 
          category='lifestyle' 
        />

      </div>
    )
  }
}