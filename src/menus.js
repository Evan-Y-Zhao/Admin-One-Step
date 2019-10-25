import { T } from 'Utils/funcUtil'
export const prefix = '/admin'

const menus = [
    {
        key: 'menu2',
        title: T('Feedback'),
        menu: {
            link: prefix + '/feedback',
            content: T('Feedback')
        }
    },
]

export default menus