import React, { PureComponent } from 'react'

import { Radio } from 'antd'
import _ from 'underscore'
import { T } from 'Utils/funcUtil'

const RadioGroup = Radio.Group

class RadioField extends PureComponent {

    render () {
        const { field, onChange } = this.props
        return (
            <div className={`form-control ${field.error ? 'has-error': ''}`}>
                <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : null}`}>{T(field.label)}</label></div>
                <div className="form-control-item">
                    <RadioGroup disabled={field.disabled ? field.disabled : false } buttonStyle="solid" onChange={(event) => onChange(event.target.value)} value={field.value ? field.value : null}>
                    {
                            field.list && _.isArray(field.list) &&field.list.map((item, i) => (
                                <Radio.Button value={item.value} key={item.value}>{item.label}</Radio.Button>
                            ))
                    }
                    
                    </RadioGroup>
                    <div className={'form-explain-holder'}>
                        { field.error ? field.errorMsg: null}
                    </div>
                </div>
            </div>
        )
    }
}

export default RadioField