import React, { PureComponent } from 'react'

import {
    Table, Input, Button, Popconfirm, Form, Icon, InputNumber, Pagination
} from 'antd'
import { T } from 'Utils/funcUtil'

const ButtonGroup = Button.Group


const FormItem = Form.Item
const EditableContext = React.createContext()

const EditableRow = ({ form, index, ...props }) => {
    return <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
};

const EditableFormRow = Form.create()(EditableRow)

class EditableCell extends PureComponent {

    getInput = (inputType) => {
        if (inputType === 'inputnumber') {
            return <InputNumber />
        }
        return <Input />
    }


    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            rules,
            ...restProps
        } = this.props
        const theRules = rules ? rules : [
            {
                required: true,
                message: `Please Input ${title}!`,
            }
        ]
       
        return (

            <EditableContext.Consumer>
                {(form) => {

                    const { getFieldDecorator } = form
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: theRules,
                                        initialValue: record[dataIndex],
                                    })(this.getInput(inputType))}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>

        );
    }
};

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingKey: ''
        }
    }

    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <span><Icon type="caret-left" /> Previous</span>
        } if (type === 'next') {
            return <span>Next <Icon type="caret-right" /></span>
        }
        return originalElement;
    }

    showTotal = (total, range) => {
        return `Total ${total}`;
    }

    handleChange = (page, pageSize) => {
        this.props.onChangePage(page, pageSize)
    }

    handleShowSizeChange = (current, size) => {
        this.props.onChangePage(current, size)
    }

    isEditing = record => record.id === this.state.editingKey; // Must only one row is in the state of editing

    cancel = () => {
        this.setState({ editingKey: '' })
    }

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return
            }
            this.setState({ editingKey: '' })
            this.props.handleSave(key, row)
        })
    }

    edit(key) {
        this.setState({ editingKey: key })
    }

    delete = (key) => {
        this.props.handleDelete(key)
    }

    render() {
        const { dataSource, columns: cols, notShowCancel, loading } = this.props;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = cols.map((col) => {
            if (!col.editable) {
                return col
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    rules: col.rules,
                    inputType: col.inputType ? col.inputType : 'text',
                    editing: this.isEditing(record),
                }),
            }
        })
        columns.push({
            title: T('Action'),
            dataIndex: 'operation',
            width: '20%',
            render: (text, record) => {
                const editable = this.isEditing(record);
                return this.props.dataSource.data.length >= 1
                    ? (
                        <div>
                            {editable ? (

                                <ButtonGroup>
                                    <EditableContext.Consumer>
                                        {form => (
                                            <Button onClick={() => {
                                                this.save(form, record.id)
                                            }}>保存</Button>
                                        )}
                                    </EditableContext.Consumer>
                                    <Popconfirm
                                        title="确认取消吗?"
                                        onConfirm={() => this.cancel(record.id)}
                                    >
                                        <Button>取消</Button>
                                    </Popconfirm>
                                </ButtonGroup>

                            ) : (
                                    <div>
                                        <span onClick={() => this.edit(record.id)} className="edit-icon"><Icon type="form" /></span>
                                        {
                                            typeof notShowCancel !== 'undefined' && notShowCancel ? null : <Popconfirm title="确认删除吗?" onConfirm={() => this.delete(record.id)}>
                                                <span className="delete-icon"><Icon type="delete" /> </span>
                                            </Popconfirm>
                                        }


                                    </div>
                                )}
                        </div>
                    ) : null
            },
        })
        return (
            <div className="layout-content" >

                <Table
                    rowKey={record => record.id}
                    components={components}
                    rowClassName={() => 'editable-row'}
                    dataSource={dataSource.data}
                    columns={columns}
                    pagination={false}
                    loading={!loading}
                />

                <Pagination
                    current={dataSource.pageNum}
                    total={dataSource.total}
                    pageSize={dataSource.pageSize ? dataSource.pageSize : null}
                    itemRender={this.itemRender}
                    showTotal={this.showTotal}
                    onChange={this.handleChange}                   
                    onShowSizeChange={this.handleShowSizeChange}
                    showSizeChanger
                />
            </div>
        );
    }
}

export default EditableTable