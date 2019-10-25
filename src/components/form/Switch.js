import React, { PureComponent } from 'react'
import { T } from 'Utils/funcUtil'
import { Switch } from 'antd'

class SwitchField extends PureComponent {

    render () {
        const { field, onChange } = this.props
        return (
            <div className={`form-control ${field.error ? 'has-error': ''}`}>
                <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : null}`}>{T(field.label)}</label></div>
                <div className="form-control-item">
                    <Switch checked={field.value ? true : false} disabled={field.disabled ? field.disabled : false } onChange={(checked) => {
                        onChange(checked ? 1 : 0)
                    }} />
                    <div className={'form-explain-holder'}>
                        { field.error ? field.errorMsg: null}
                    </div>
                </div>
            </div>
        )
    }
}

export default SwitchField