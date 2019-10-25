import React, { PureComponent } from 'react'
import {
    Select
} from 'antd'
import _ from 'underscore'
import { T } from 'Utils/funcUtil'
const Option = Select.Option


class SelectWrapper extends PureComponent {

    render() {
        const { field, onChange, mode } = this.props
        let value = ''
        if (mode === 'multiple') {
            value = _.intersection(field.value, field.list.map(d => d.value))
        } else {
            value = _.indexOf(field.list.map(d => d.value), field.value) !== -1 ? field.value : ''
        }
        return (
            <div className={`form-control ${field.error ? 'has-error': ''}`}>
                <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : null}`}>{T(field.label)}</label></div>
                <div className="form-control-item">
                    <Select disabled={field.disabled ? field.disabled : false } value={value} mode={mode ? mode : null} onChange={(value) => onChange(value)}>
                        {
                            field.list && _.isArray(field.list) &&field.list.map((item, i) => (
                                <Option value={item.value} key={item.value}>{item.label}</Option>
                            ))
                        }
                    </Select>
                    <div className={'form-explain-holder'}>
                        { field.error ? field.errorMsg: null}
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectWrapper
