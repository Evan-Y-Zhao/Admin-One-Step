import React from 'react'
import reactCSS from 'reactcss'
import { Input } from 'antd'
import { ChromePicker } from 'react-color'
import { T } from 'Utils/funcUtil'

class SketchExample extends React.Component {
    state = {
        displayColorPicker: false,
        color: '#000'
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    render() {
        const { field, onChange } = this.props
        const color = field.value ? field.value : this.state.color
        const styles = reactCSS({
            'default': {
                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: color,
                },
                swatch: {
                    padding: '8px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                    marginRight: '1rem'
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
                colorContent: {
                    display: 'flex',
                    alignItem: 'center'
                }
            },
        });
        
        return (
            <div className={`form-control ${field.error ? 'has-error' : ''}`}>
                <div className="form-control-label"><label className={`${field.required ? 'form-control-item-required' : ''}`}>{T(field.label)}</label></div>
                <div className="form-control-item">
                    <div style={styles.colorContent}>
                        <div className="color-picker" style={styles.swatch} onClick={this.handleClick}>
                            <div style={styles.color} />
                        </div>
                        <div><Input disabled={field.disabled ? field.disabled : false } allowClear type={field.inputType ? field.inputType : 'text'} value={field.value ? field.value : ''} onChange={(event) => onChange(event.target.value)}/></div>
                    </div>
                    {this.state.displayColorPicker ? <div style={styles.popover}>
                        <div style={styles.cover} onClick={this.handleClose} />
                        <ChromePicker color={field.value ? field.value : this.state.color} onChangeComplete={(color) => onChange(color.hex)} />
                    </div> : null}
                    <div className={'form-explain-holder'}>
                        { field.error ? field.errorMsg: null}
                    </div>
                </div>

            </div>
        )
    }
}

export default SketchExample