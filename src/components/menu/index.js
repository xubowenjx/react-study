import React from 'react'
import { Link } from 'react-router-dom'
import './style.less';
class menu extends React.Component {
  render() {
    var names = ['home', 'two', 'three'];
    return (
      <ul className="menu">
         {
           names.map(function (name, index) {
            return <li key={index}><Link to={index===0?'/':name}>{name}</Link></li>
          })
         }
      </ul>
    )
  }
}
export default menu
