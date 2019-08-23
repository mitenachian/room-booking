import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;
// 第六關Api 路徑
export const apiUrl = 'https://challenge.thef2e.com/api/thef2e2019/stage6';
// 我的api token
export const token = 'HK91wEimEd6lFyCn7v4iT5LeZxY7NRItZ0vXTZXKd2CsJ9cy9XRbeOzJojVp';

const apiRequest = axios.create({
    baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6/',
    timeout: 10000,
    headers: {
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
        'Authorization': `Bearer ${token}`
    }
  });

/* API */
// [GET] 取得所有房型
export const getRoomsList = () => apiRequest.get('/rooms')

// [GET] 單一房型細節
export const getRoomsDetail = data => apiRequest.get(`/room/${data}`)

// [POST] 訂房
// export const roomBooking = data => apiRequest.post(`/room/${id}`, data)

export function roomBooking(id, data) {

    return apiRequest.post(`/room/${id}`, data)
}

// [DELETE] 清除所有預約
export const bookingDel = data => apiRequest.delete('/rooms', data)

