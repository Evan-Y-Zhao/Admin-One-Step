import React from 'react'
import { Icon, Input, AutoComplete } from 'antd'
import menus from '../../menus'

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

function renderOption(group) {
    return (
        <OptGroup
            key={group.key}
            label={group.key}
        >
            {group.subMenus.map(opt => (
                <Option key={opt.key} value={opt.content}>
                    {opt.content}
                </Option>
            ))}
        </OptGroup>
    );
}

export default class SearchBox extends React.PureComponent {

    state = {
        result: [],
    }

    onFocus = () => {
        this.setState({ result: [] });
    }

    onSelect = (value) => {
        let key = '/'
        menus.map(me => {
            me.subMenus.map(submenu => {
                if (submenu.content === value) {
                    key = submenu.key
                }
                return null
            })
            return null
        })
        
        this.props.history.replace(key)
    }

    handleSearch = (value) => {
        let result = [];
        console.log(value)
        menus.map(me => {
            let obj = {
                key: me.key,
                subMenus: []
            }
            let find = false
            me.subMenus.map(submenu => {
                if (submenu.content.indexOf(value) !== -1) {
                    find = true
                    obj.subMenus.push(submenu)
                }
                return null
            })
            find && result.push(obj)
            return null
        })
        this.setState({ result });
    }

    render() {
        return (
            <div className="searchbox-auto">
                <AutoComplete
                    className="menu-search"
                    dropdownClassName="menu-search-dropdown"
                    dropdownMatchSelectWidth={false}
                    dropdownStyle={{ width: 300 }}
                    style={{ width: '100%' }}
                    dataSource={this.state.result.map(renderOption)}
                    onSearch={this.handleSearch}
                    onSelect={this.onSelect}
                    onFocus={this.onFocus}
                    optionLabelProp="value"
                >
                    <Input placeholder="Search..." prefix={<Icon type="search" className="searchbox-search-icon" />} className="searchbox-search" />
                </AutoComplete>
            </div>
        );
    };

}

