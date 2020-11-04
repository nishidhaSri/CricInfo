import Vue from 'vue'
// import Antd from 'ant-design-vue/lib'
import Row from 'ant-design-vue/lib/row'
import Col from 'ant-design-vue/lib/col'
import Drawer from 'ant-design-vue/lib/drawer'
import Checkbox from 'ant-design-vue/lib/checkbox'
import Button from 'ant-design-vue/lib/button'
import Input from 'ant-design-vue/lib/input'
import Menu from 'ant-design-vue/lib/menu'
import 'ant-design-vue/dist/antd.css'
import Layout from 'ant-design-vue/lib/layout'
import Card from 'ant-design-vue/lib/card'
import Modal from 'ant-design-vue/lib/modal'
import Progress from 'ant-design-vue/lib/progress'
import Icon from 'ant-design-vue/lib/icon'

Vue.component('a-row', Row)
Vue.component('a-col', Col)
Vue.component('a-drawer', Drawer)
Vue.component('a-checkbox', Checkbox)
Vue.component('a-button', Button)
Vue.component('a-input', Input)
Vue.component('a-menu', Menu)
Vue.component('a-menu-item', Menu.Item)
Vue.component('a-checkbox-group', Checkbox.Group)
Vue.component('a-layout', Layout)
Vue.component('a-layout-header', Layout.Header)
Vue.component('a-card', Card)
Vue.component('a-card-meta', Card.Meta)
Vue.component('a-modal', Modal)
Vue.component('a-progress', Progress)
Vue.component('a-icon', Icon)
Vue.use(Modal)
Vue.use(Drawer)
// Vue.use([Row, Col, Drawer, Checkbox, Button, Input, Menu])
