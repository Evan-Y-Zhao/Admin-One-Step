import React, { Component } from 'react'
import { Table, Pagination, Icon } from 'antd'
import PropTypes from 'prop-types'

class ManagementTable extends Component {

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
        this.props.onChangeSize(current, size)
    }

    render() {

        const { rowSelection, columns, dataSource, loading, PageFlag } = this.props
        return (
            <div>
                <Table
                    rowSelection={rowSelection ? rowSelection : null} 
                    loading={!loading} 
                    columns={columns} 
                    dataSource={dataSource.data} 
                    pagination={false} 
                    rowKey={record => record.rowNumber} 
                    bordered
                    size="middle"
                    scroll={{ x: 1850,y: 400 }}
                />

                { PageFlag !== 0 ? <Pagination
                    current={dataSource.page}
                    total={dataSource.total}
                    pageSize={dataSource.length ? dataSource.length : null}
                    itemRender={this.itemRender}
                    showTotal={this.showTotal}
                    onChange={this.handleChange}                   
                    onShowSizeChange={this.handleShowSizeChange}
                    showSizeChanger
                /> : null }
            </div>
        )
    }
}

ManagementTable.propTypes = {
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

export default ManagementTable