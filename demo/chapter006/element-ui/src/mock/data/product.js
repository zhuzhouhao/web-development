import Mock from 'mockjs'

const productTemplate = {
  'id|+1': 1,
  'productPic': 'img/prod.png',
  'productName|1': ["手机", "香皂", "牙膏", "被子", "电脑", "米饭", "香肠"],
  'productInfo': "@cparagraph",
  'price': "@float(1, 100, 5, 10)",
}

const pList = []
const num = 7

for (let i = 0; i < num; i++) {
  pList.push(Mock.mock(productTemplate));
}
export default {
  getProdList: () => {
    return {
      data: pList
    };
  }
}
