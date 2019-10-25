import React, { PureComponent } from 'react'
import { Layout } from 'antd'

const { Content } = Layout

class PublicLayout extends PureComponent {

  render() {
    return (
        <Layout>
          <Content style={{
            padding: 24, background: '#f3f5f8', minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
          >
            {this.props.children}
          </Content>
        </Layout>
    
    );
  }
}


export default PublicLayout;
