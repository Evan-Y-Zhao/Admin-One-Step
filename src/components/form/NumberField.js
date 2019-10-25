import React, { PureComponent } from 'react'
import {
    InputNumber
  } from 'antd'
import { T } from 'Utils/funcUtil'

class NumberField extends PureComponent {

    render () {
        const { field, onChange } = this.props
       
        return (
            <div className={`form-control ${field.error ? 'has-error': ''}`}>
                <div className="form-control-label">
                    <label className={`${field.required ? 'form-control-item-required' : ''}`}>{T(field.label)}</label>
                </div>
                <div className="form-control-item">
                    <InputNumber min={field.min ? field.min : 0} disabled={field.disabled ? field.disabled : false } allowClear value={field.value ? field.value : 0} onChange={(value) => onChange(value)}/>
                    <div className={'form-explain-holder'}>
                    { field.error ? field.errorMsg: null}
                    </div>
                </div>
            </div>
        )
    }
}

export default NumberField