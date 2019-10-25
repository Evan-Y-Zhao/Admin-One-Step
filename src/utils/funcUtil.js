import React from 'react'
import { FormattedMessage } from 'react-intl'
import _ from 'underscore'

export const getValues = (list, labels) => {
    if (_.isArray(labels) && _.isArray(list)) {
        return labels.map(l => {
            const re = _.findWhere(list, { label: l })
            if (re)
                return re.value
            return null
        })
    }
    return []
}

export const getLabels = (list, values) => {
    if (_.isArray(values) && _.isArray(list)) {
        const vv = _.intersection(values, list.map(d => d.value))
        return vv.map(l => {
            const re = _.findWhere(list, { value: l })
            if (re)
                return re.label
            return null
        })
    }
    return []
}

export const T = (key, defaultMessage) => {
    return <FormattedMessage id={key} defaultMessage={defaultMessage || ''} />
}

// Format string 
export const formattedT = (key, value) => {
    return <FormattedMessage id={key} values={value} />
}

// Combine two formatted message into one string in order to avoid many same message appearing in the json files.
export const nestedFormattedT = (key, childrenId) => {
    return <FormattedMessage id={key}>
        {
            (txt) => <FormattedMessage id={childrenId} values={{ text: txt }} />
        }
    </FormattedMessage>
}

export const textFormattedT = (key, children) => {
    return <FormattedMessage id={key}>
        {
            children
        }
    </FormattedMessage>
}

export const flatFormattedMessage = (intl) => (id) => {
    return intl.formatMessage({id})
}

//小数乘法
export const floatMul = (a, b) => {
    let m = 0, n = 0,              //记录a，b的小数位数
        d = a + "",                  //字符串化
        e = b + "";
    try {
        m = d.split(".")[1].length;
    } catch (error) {
        // console.log(error)
    }
    try {
        n = e.split(".")[1].length;
    } catch (error) {
        // console.log(error)
    }
    let maxInt = Math.pow(10, m + n); //将数字转换为整数的最大倍数
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / maxInt;
}
