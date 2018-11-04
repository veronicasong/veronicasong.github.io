import React from 'react'
import styles from './EditDrawer.less'
import { Icon, Upload, Switch, Drawer, Button, Input } from 'antd'
import { connect } from 'dva';

@connect(({ loading }) => ({ loading }))
export default class EditDrawer extends React.Component {
  state = {
    title: '',
    description: '',
    hidden: false,
    fileList: [],
    content: ''
  }

  componentDidMount() {
    const { media } = this.props
    media && this.setState({ 
      content: media.content, 
      title: media.title, 
      description: media.description, 
      hidden: media.hidden 
    })
  }

  handleUpdateTitle = e => {
    this.setState({ title: e.target.value })
  }

  handleUpdateDescription = e => {
    this.setState({ description: e.target.value })
  }

  handleUpdateVisibility = hidden => {
    this.setState({ hidden })
  }

  handleClose = (e, refresh = false) => {
    this.props.onClose(refresh)
  }

  handleSubmit = () => {
    const { content, title, description, hidden } = this.state
    const { mode, media, category } = this.props
    this.props.dispatch({
      type: mode === 'edit' ? 'common/updateMedia' : 'common/postMedia',
      payload: mode === 'edit' ? {
        ...media, title, description, hidden, content, category
      } : {
        title, description, hidden, content, category
      }
    }).then(res => {
      res && this.handleClose(null, true)
    })
  }

  handleFileChange = ({ fileList }) => this.setState({ fileList })

  handleUploadFile = file => {
    const form = new FormData()
    const category = process.env.NODE_ENV === 'development' ? 'test' : this.props.category
    form.append('file', file)
    form.append('category', category)
    form.append('fileName', file.name)

    this.props.dispatch({
      type: 'common/uploadFileToOss',
      payload: form
    }).then(res => {
      this.setState({ content: res })
    })
    // prevent default upload action
    return false
  }

  renderUpload() {
    return (
      <div className="clearfix">
        <Upload
          beforeUpload={this.handleUploadFile}
          listType="picture-card"
          fileList={this.state.fileList}
          onPreview={() => { }}
          onChange={this.handleFileChange}
        >
          {
            this.state.fileList.length >= 1 ? null :
              <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
              </div>
          }
        </Upload>
      </div>
    )
  }

  render() {
    const { media, visible, mode } = this.props
    const { title, description, hidden } = this.state

    return (
      <Drawer
        title={mode === 'edit' ? 'Edit' : 'Upload'}
        placement="right"
        onClose={this.handleClose}
        visible={visible}
        width={500}
        style={{
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: 53,
        }}
      >
        <div className={styles.drawer}>
          {
            mode === 'edit' ?
              <img src={media.url} />
              :
              this.renderUpload()
          }
          <div className={styles.formItem}>
            <span>Hidden:</span>
            <div>
              <Switch checkedChildren="ON" unCheckedChildren="OFF" checked={hidden} onChange={this.handleUpdateVisibility} />
            </div>
          </div>

          <div className={styles.formItem}>
            <span>Title:</span>
            <Input value={title} onChange={this.handleUpdateTitle} />
          </div>
          <div className={styles.formItem}>
            <span>Description:</span>
            <Input.TextArea rows={4} value={description} onChange={this.handleUpdateDescription} />
          </div>

        </div>
        <div className={styles.footer}>
          <Button type="default" style={{ marginRight: 8 }} onClick={this.handleClose}>Cancel</Button>
          <Button type="primary" onClick={this.handleSubmit} >Submit</Button>
        </div>
      </Drawer>
    )
  }
}