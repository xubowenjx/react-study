/**
 * 了解React的生命周期
 */
import React from 'react'
import './style.less'
class world extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.aee = props.name ? props.name : 'Hellow'
    //绑定事件 如果下面不是箭头函数 就需要这个绑定
    this.handleClick = this.handleClick.bind(this)
  }
  //处理事件申明
  handleClick() {
    alert('you clicked ' + this.props.text)
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.aee = 'init'
  }
  //onClick事件监听
  render() {
    return (
      <div>
        <h1>
          <button className={this.props.type} onClick={this.handleClick}>
            {this.props.text}
          </button>
        </h1>
      </div>
    )
  }
}
export default world
