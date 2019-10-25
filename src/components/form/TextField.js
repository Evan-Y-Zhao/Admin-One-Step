import React, { PureComponent } from 'react'
import {
   Input
  } from 'antd'
import { T } from 'Utils/funcUtil'

class TextField extends PureComponent {

    render () {
        const { field, onChange } = this.props
       
        return (
            <div className={`form-control ${field.error ? 'has-error': ''}`}>
                <div className="form-control-label">
                    <label className={`${field.required ? 'form-control-item-required' : ''}`}>{T(field.label)}</label>
                    {/* <Popover placement="top" content={content} >
                        <Icon type="question-circle" />
                    </Popover> */}
                </div>
                <div className="form-control-item">
                    <Input placeholder={field.placeholder ? field.placeholder : '' } disabled={field.disabled ? field.disabled : false } allowClear type={field.inputType ? field.inputType : 'text'} value={field.value ? field.value : ''} onChange={(event) => onChange(event.target.value)}/>
                    <div className={'form-explain-holder'}>
                    { field.error ? field.errorMsg: null}
                    </div>
                </div>
            </div>
        )
    }
}

export default TextField