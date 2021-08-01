import request from '@/utils/request'

export function orderManagerList(data) {
  return request({
    url: '/order/orderManager',
    method: 'post',
    data
  })
}