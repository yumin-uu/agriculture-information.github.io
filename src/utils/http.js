import axios from 'axios'
// import router from '../router"
const instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
})

// 除了登录请求之外的请求 都必须设置请求头，请求头带 token (权限，身份认证)
// 用户每次登录成功都会重新生成一个新的 token，登录时 存储在 localStorage 中
// 请求时 需要对所有请求设置请求拦截器，将所有请求的请求头添加 token
// token 后端会设置过期或不过期
// 如果设置了过期时间，过期后再发请求，请求会失败提示错误码 401 (token 过期)

// 请求拦截器
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})


instance.interceptors.response.use(res => {
  // 根据后端的错误码提示对应的信息，比如 (401 token 过期)
  // if(res.code == 401){
  //   // 提示登录过期，重新登录
  // }
  return res.data
})

export const getAction = (url, data) => instance({
  method: 'GET',
  url,
  params: data,
})

export const postAction = (url, data) => instance({
  method: 'POST',
  url,
  data,
})

export const deleteAction = (url, data) => instance({
  method: 'DELETE',
  url,
  data,
})

export const patchAction = (url, data) => instance({
  method: 'PATCH',
  url,
  data,
})

export default instance










