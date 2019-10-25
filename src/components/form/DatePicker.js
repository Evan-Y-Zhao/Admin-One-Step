import React, { PureComponent } from 'react'
import { DatePicker } from 'antd'
import moment from 'moment'
import { T } from 'Utils/funcUtil'

class DatePickerWrapper extends PureComponent {

    render () {
        const { field, onChange } = this.props
        return (
            <div className={`form-control ${field.error ? 'has-error': ''}`}>
                <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : ''}`}>{T(field.label)}</label></div>
                <div className="form-control-item">
                    <DatePicker value={field.value ? moment(field.value) : null} onChange={(date, datestring) => onChange(datestring)}/>
                    <div className={'form-explain-holder'}>
                    { field.error ? field.errorMsg: null}
                    </div>
                </div>
            </div>
        )
    }
}

export default DatePickerWrapper