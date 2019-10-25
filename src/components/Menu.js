import React from 'react'
import { Menu } from 'antd'
import {
    Link
} from 'react-router-dom'
import menus from '../menus'
// import _ from 'underscore'

let openKeys = menus.map((m, i) => 'menu'+(i+1))

const SubMenu = Menu.SubMenu

export default class MenuWrapper extends React.Component {

    state = {
        openKeys: [
            ...openKeys
        ]
    };

    onOpenChange = (keys) => {
        openKeys = keys
        this.setState({ openKeys: keys });
    }

    render() {
        const { location } = this.props
        let selectedKeys = location.pathname
        
        return (
            <Menu
                mode="inline"
                // openKeys={this.state.openKeys.length === 0 ? [menus[0].key] : this.state.openKeys}
                // onOpenChange={this.onOpenChange}
                overflowedIndicator={<span></span>}
                defaultOpenKeys={openKeys}
                
                defaultSelectedKeys={['/']} selectedKeys={[selectedKeys]}
            >
                {
                    menus.map(ms => {
                        return ms.subMenus ? <SubMenu key={ms.key} title={<span>{ms.title}</span>}>
                            {
                                ms.subMenus && ms.subMenus.map(item => (
                                    <Menu.Item key={item.link}>
                                        <Link to={item.link}>
                                            <span>{item.content}</span>
                                        </Link>
                                    </Menu.Item>
                                ))
                            }
                        </SubMenu> : <Menu.Item key={ms.menu.link}>
                                        <Link to={ms.menu.link}>
                                            <span>{ms.menu.content}</span>
                                        </Link>
                                    </Menu.Item>
                    })
                }


            </Menu>
        );
    }
}

