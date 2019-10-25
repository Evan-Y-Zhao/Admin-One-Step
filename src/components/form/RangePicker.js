import React, { PureComponent } from 'react'
import { DatePicker } from 'antd'
import { T } from 'Utils/funcUtil'
const { RangePicker } = DatePicker

class RangePickerWrapper extends PureComponent {

    render () {
        const { field, onChange } = this.props
        return (
            <div className={`form-control ${field.error ? 'has-error': ''}`}>
                <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : ''}`}>{T(field.label)}</label></div>
                <div className="form-control-item">
                    <RangePicker value={field.value} onChange={(date, datestring) => { onChange(date)}}/>
                    <div className={'form-explain-holder'}>
                    { field.error ? field.errorMsg: null}
                    </div>
                </div>
            </div>
        )
    }
}

export default RangePickerWrapper