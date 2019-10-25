import React, { PureComponent } from 'react'
import {
    Select
} from 'antd'
import { T } from 'Utils/funcUtil'

class SearchField extends PureComponent {

    handleChange = selectedItems => {
        this.props.onChange(selectedItems)
    };

    render() {
        const { field } = this.props
        
        const filteredOptions = field.list.filter(o => !field.value.includes(o.label));
        
        return (
            <div className={`form-control ${field.error ? 'has-error' : ''}`}>
                <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : null}`}>{T(field.label)}</label></div>
                <div className="form-control-item">
                    <Select
                        mode="multiple"
                        value={field.value}
                        onChange={this.handleChange}
                        style={{ width: '100%' }}
                    >
                        {filteredOptions.map(item => (
                            <Select.Option key={item.value} value={item.label}>
                                {item.label}
                            </Select.Option>
                        ))}
                    </Select>
                    <div className={'form-explain-holder'}>
                        {field.error ? field.errorMsg : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchField