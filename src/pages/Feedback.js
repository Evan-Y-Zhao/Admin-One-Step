import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Breadcrumb, Button } from 'antd'
import ManagementTable from 'Components/ManagementTable'
import { getFeedbackList, updateSearchFields, updateTableConfig } from 'Actions/feedback'
import FormWrapper from 'Components/form/FormWrapper'
import { T } from 'Utils/funcUtil'

class Feedback extends Component {
	state = {
		feedbackListLoaded: false,
		pageSize: 10,
		pageNum: 1,
		layout: {
      default: {
          subFields: [
              {
								'col-1': 'key'
							}
          ]
      },
		},
		fields: {}
	}

	componentWillMount() {
    this.props.getFeedbackList();
	}

  handleChange = (name, typedValue) => {
		let newState = { [name]: { value: { $set: typedValue } } }
    this.props.updateSearchFields(newState)
  }

	handleError = (func) => {
		this.setState(func)
	}

	handleSearch = () => {
			this.props.getFeedbackList({pageNum: 1})
	}

	pageChange = (page, pageSize) =>{
		let newState = { pageNum: { $set: page }, pageSize: { $set: pageSize } } 
    this.props.updateTableConfig(newState)
		this.props.getFeedbackList()
	}

  render() {
		const columns = [
			{
				title: T("Others:Feedback:Name"),
				dataIndex: 'fullName',
				key: 'fullName',
			}, 
			{
				title: T("Others:Feedback:Tel"),
				dataIndex: 'mobile',
				key: 'mobile',
			}, 
			{
				title: T("Others:Feedback:Account"),
				dataIndex: 'email',
				key: 'email',
			}, 
			{
				title: T("Others:Feedback:Unit"),
				dataIndex: 'institution',
				key: 'institution',
			}, 
			{
				title: T("Others:Feedback:Group"),
				dataIndex: 'labOrDept',
				key: 'labOrDept',
			}, 
			{
				title: T("Others:Feedback:Suggestion"),
				dataIndex: 'message',
				key: 'message',
			},
			{
				title: T("CreatedTime"),
				dataIndex: 'createTime',
				key: 'createTime',
			}
		];	
		const { feedbackList, feedbackListLoaded, fields } = this.props
		const { layout } = this.state
		const props = {
      layout,
      fields,
      handleChange: this.handleChange,
      handleError: this.handleError,
      onSubmit: this.handleSearch,
    }
		return (
      <div className='sc-list'>
        <Breadcrumb style={{ padding: '0 2%' }}>
          <Breadcrumb.Item>{T('Others')}</Breadcrumb.Item>
          <Breadcrumb.Item className='breadcumb-last-child'>{T('Others:Feedback')}</Breadcrumb.Item>
        </Breadcrumb>

				<div style={{ padding: '2%' }}>
					<div className='sku-search'>
						<div className="search-right">
              <FormWrapper {...props} footer={<div className='search-button'><Button type="primary" htmlType='submit' className="form-button" >{T('Search')}</Button></div>} />
            </div>
          </div>

          <ManagementTable loading={feedbackListLoaded} onChangePage={this.pageChange} onChangeSize={this.pageChange} columns={columns} dataSource={feedbackList}></ManagementTable>	
        </div> 								
	    </div>
    )
	}
}

const mapStateToProps = state => {
	const { feedback } = state;
	return {
		feedbackList: feedback.feedbackList,
		feedbackListLoaded: feedback.feedbackListLoaded,
		fields: feedback.searchfields,
	};
};

const mapDispatchToProps = {
	getFeedbackList, 
	updateSearchFields, 
	updateTableConfig	
};

Feedback.propTypes = {
	getFeedbackList: PropTypes.func.isRequired,
	updateSearchFields: PropTypes.func.isRequired,
	updateTableConfig: PropTypes.func.isRequired
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
