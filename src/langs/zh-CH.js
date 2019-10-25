import appLocaleData from 'react-intl/locale-data/zh'
import zhMessages from './locals/zh.json'
import zhCN from 'antd/lib/locale-provider/zh_CN'

import 'moment/locale/zh-cn'

export default {
  messages: {
    ...zhMessages,
  },
  antd: zhCN,
  locale: 'zh-Hans-CN',
  data: appLocaleData,
};
