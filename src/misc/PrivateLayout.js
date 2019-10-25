import React, { PureComponent } from 'react'
import { Layout } from 'antd'

import Menu from '../components/Menu'
import Header from '../components/header/Header'
const { Sider, Content } = Layout
const { Content } = Layout

class PrivateLayout extends PureComponent {

    render() {
        // const { location } = this.props
        return (
            <Layout id="components-layout">
                <Header { ...this.props }/>
                <Layout className="private-layout" style={{height: 'auto'}}>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        width="250"
                        // className="left-sider"
                        style={{ background: '#fff' }}
                    >
                        <Menu location={location}/>
                    </Sider>
                    <Content style={{ background: '#fff', minHeight: 'inherit', height: '100%'}}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}


export default PrivateLayout;
