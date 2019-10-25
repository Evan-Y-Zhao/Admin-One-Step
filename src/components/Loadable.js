import React from 'react'
import { Spin } from 'antd'
import Loadable from 'react-loadable'

export default function loading(component) {
    return Loadable({
        loader: component,
        loading() {
            return <div style={{height: '100%', width: '100%', textAlign: 'center'}}><Spin size="large" /></div>
        }
    });
}