import React from 'react'
import { Icon, Form, Button, Input } from 'antd'
import styles from './index.less'
import { connect } from 'dva';
import { withRouter } from 'react-router';
// import ConsoleService from 'services/console'

const FormItem = Form.Item

@withRouter
@connect(({ loading }) => ({ loading }))
@Form.create()
export default class ConsoleIndexContainer extends React.Component {

  componentDidMount() {
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'console/login',
          payload:{ username: values.username, password: values.password }
        }).then(res => {
          if (res) {
            this.props.history.push('/console/dashboard')
          }
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.container}>
        <h1>50 Percent Console</h1>
        <Form onSubmit={this.handleSubmit} className={styles.form}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <Button loading={this.props.loading.effects['console/login']} type="primary" htmlType="submit" className={styles.btn}>
            Log in
          </Button>
        </Form>
      </div>
    )
  }
}