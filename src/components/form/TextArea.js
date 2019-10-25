import React, { PureComponent } from 'react'
import {
    Input
} from 'antd'
import { textFormattedT, T } from 'Utils/funcUtil'

const { TextArea } = Input
class TextAreaField extends PureComponent {

    render() {
        const { field, onChange } = this.props
        
        const textArea = (placeholder) => <TextArea disabled={field.disabled ? field.disabled : false} rows={`${field.rows ? field.rows : 4}`} value={field.value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
        return (
            <div className={`form-control ${field.error ? 'has-error' : ''}`}>
                {field.label !== '' ?
                    <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : null}`}>{T(field.label)}</label></div>
                    : null}
                <div className="form-control-item">
                    {
                        field.placeholder ? textFormattedT(field.placeholder, textArea) : textArea('')
                    }

                    <div className={'form-explain-holder'}>
                        {field.error ? field.errorMsg : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default TextAreaField