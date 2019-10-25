import React, { PureComponent } from 'react'
import TextField from './TextField'
import Selection from './Selection'
import UploadFile from './UploadFile'
import SearchField from './SearchField'
import TextArea from './TextArea'
import RangePicker from './RangePicker'
import DatePicker from './DatePicker'
import NumberField from './NumberField'
import Radio from './Radio'
import Switch from './Switch'
import ColorPicker from './ColorPalette'

import { Row, Col } from 'antd'
import Proptypes from 'prop-types'
import AsyncValidator from 'async-validator'

import _ from 'underscore'



class FormWrapper extends PureComponent {

    constructor(props) {
        super(props)
        this.validator = null
        this.descriptor = {}
        this.fieldValues = {}
    }

    chooseComponent = (field) => {
        let component = null
        switch (field.type) {
            case 'customize':
                component = <field.component />
                break;
            case 'switch':
                component = <Switch />
                break;
            case 'inputnumber':
                component = <NumberField />
                break;
            case 'colorpicker':
                component = <ColorPicker />
                break;
            case 'datepicker':
                component = <DatePicker />
                break;
            case 'rangepicker':
                component = <RangePicker />
                break;
            case 'textarea':
                component = <TextArea />
                break;
            case 'radio':
                component = <Radio />
                break;
            case 'textfield':
                component = <TextField />
                break;
            case 'multiSelection':
                component = <Selection mode="multiple"/>
                break;
            case 'selection':
                component = <Selection />
                break;
            case 'uploadfile':
                component = <UploadFile />
                break;
            case 'searchfield':
                component = <SearchField />
                break;
            default:
                component = <TextField />
        }
        return component
    }

    onChange = (name) => (typedValue) => {
        this.props.handleChange(name, typedValue)
        
        if (this.validator) {
            this.fieldValues[name] = typedValue
            this.validator.validate(this.fieldValues, (errors, fields) => {
                this.props.handleError(this.handleErrors(errors))
            })
        }
    }

    handleErrors = (errors) => (state) => {
        const newState = {}
        Object.keys(state.fields).map(f => {
            typeof state.fields[f].error !== 'undefined' && delete state.fields[f].error
            typeof state.fields[f].errorMsg !== 'undefined' && delete state.fields[f].errorMsg
            if (_.isArray(errors) && errors.length > 0) {
                const where = _.where(errors, { field: f })
                if (where.length > 0) {
                    state.fields[f].error = true
                    const msgss = where.map((currentValue) => {
                        return currentValue.message
                    })
                    state.fields[f].errorMsg = msgss.length === 1 ? msgss[0] : msgss.join(',')
                }
            }
            newState[f] = state.fields[f]
            return null
        })
        return {
            fields: newState
        }
    }

    onSubmit = (fields) => {
        // Once submit button clicked, each field would be validated while typing.
        this.validator = new AsyncValidator(this.descriptor);

        Object.keys(fields).map(f => {
            this.fieldValues[f] = fields[f].value
            return null
        })
        
        this.validator.validate(this.fieldValues, (errors, fields) => {
            if (!errors) this.props.onSubmit(this.fieldValues)
            else this.props.handleError(this.handleErrors(errors))
            // validation passed
        });
    }

    getFieldDecorator = (name, config) => {
        const field = this.props.fields[name]
        const props = {
            field,
            key: name
        }

        props.onChange = this.onChange(name)
        if (config.rules && _.isArray(config.rules) && config.rules.length > 0) {
            if (config.rules.length === 1) {
                this.descriptor[name] = config.rules[0]
            } else {
                this.descriptor[name] = config.rules
            }
        }

        return (fieldElm) => {
            return <fieldElm.type {...fieldElm.props} {...props}></fieldElm.type>
        }
    }

    render() {
        const { layout, fields, align } = this.props
        this.descriptor = {}

        return (
            <form className={`form-wrapper ${align ? align : 'form-vertical'}`} onSubmit={(event) => {
                event.preventDefault()
                this.onSubmit(fields)
            }}>
                {
                    Object.keys(layout).map((s, r) => {
                        const rows = layout[s].subFields
                        return <div key={`section_${r}`} className="form-section">
                            { layout[s].title ? <h3>{layout[s].title}</h3> : null }
                            {
                                rows.map((l, i) => {
                                    const span = Object.keys(l).length
                                    const rowKey = `row-${i}`
                                    
                                    return <Row key={rowKey} type="flex" justify="start" gutter={16}>
                                        {
                                            Object.keys(l).map((f, j) => {
                                                return <Col lg={24 / span} xs={24} md={24} key={rowKey + 'col' + j}>
                                                    {l[f] ? this.getFieldDecorator(l[f], {
                                                        rules: fields[l[f]].rules
                                                    })(
                                                        this.chooseComponent(fields[l[f]])
                                                    ) : null
                                                    }
                                                </Col>
                                            })
                                        }
                                    </Row>
                                })
                            }
                        </div>
                    })
                }
                {this.props.footer}
            </form>
        );
    }
}

FormWrapper.propTypes = {
    layout: Proptypes.object.isRequired,
    fields: Proptypes.object.isRequired
}

export default FormWrapper
