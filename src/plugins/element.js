
import Vue from 'vue'
// 按需导入 Element 组件，并全局注册
import {Button, Col, DatePicker, Dialog, Divider, Dropdown, DropdownItem, DropdownMenu, Form, FormItem, Input, Loading, Menu, MenuItem, MenuItemGroup, Message, Notification, Option, Pagination, Popconfirm, Popover, Rate, Row, Select, Submenu, Table, TableColumn, Tag} from 'element-ui'

Vue.use(Button)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Rate)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(DatePicker)
Vue.use(Pagination)

Vue.use(Popconfirm)
Vue.use(Popover)        // Popconfirm 使用了 Popover 的样式

Vue.use(Row)
Vue.use(Col)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)

Vue.use(Loading)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message







