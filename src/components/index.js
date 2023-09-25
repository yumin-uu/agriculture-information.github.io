
// components 下的 组件 自动化全局注册

import Vue from 'vue'

// 将 components 里的 .vue 后缀的组件全部注册成全局组件
// requireComponent 会匹配到所有满足条件的文件
const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /.+\.vue$/
)

// requireComponent.keys() 对文件名进行循环
requireComponent.keys().forEach(fileName => {
  // 获取组件配置   导入组件
  const componentConfig = requireComponent(fileName)
  // 全局注册组件
  Vue.component(
    // 使用组件内的 name 属性当作名字
    componentConfig.default.name,
    // 如果组件选项是通过 export default 导出的
    // 那么就会优先使用 .default
    // 否则回退到使用模块的根
    componentConfig.default || componentConfig
  )

})