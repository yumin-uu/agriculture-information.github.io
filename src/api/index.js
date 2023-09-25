import { getAction, postAction } from "@/utils/http";

// 1. 登录
// 地址     /accesstoken
// 方法     post
// 返回值   
export const login = accesstoken => postAction('/accesstoken', {accesstoken})


// 2. 首页列表
// 方法     get
// 地址     /topics
// 参数     page(页数)   limit(每页展示条数，默认40)   tab(类型)
// 返回值   {..., data: [] }
export const getList = params => getAction('/topics', params)


// 3. 文章详情页
// 方法     get
// 地址     /topics:id
// 返回值   {一条数据}
export const getDetail = id => getAction('/topic/' + id)



// 4. 点头像  =>  人物主页
// 方法     get
// 地址     /topics:id
// 返回值   {一条数据}
export const getUserInfo = loginname => getAction('/user/' + loginname)

























