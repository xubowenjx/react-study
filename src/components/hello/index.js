import React from 'react'
import Menu from '../menu'
import World from '../world'
class Hello extends React.Component {
    render(){
        return (
            <div>
                <Menu></Menu>
                <h1>hello My friend</h1>
                <h2><World type="success" text="click"/></h2>
                <div>
                    This my first come China
                    <World type="success" text="lalal"/>
                    <World type="success" text="lalal"/>
                    <World type="success" text="lalal"/>
                </div>
            </div>
        )
    }
}
export default Hello