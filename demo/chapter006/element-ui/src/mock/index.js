import Mock from 'mockjs'
import product from './data/product'

// 接口地址，请求方式，操作
Mock.mock(/\/prod\/list/, 'get', product.getProdList) // 查询

export default Mock
