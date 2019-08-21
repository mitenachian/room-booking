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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Headers': '*',
        'Authorization': `Bearer ${token}`
    }
  });


// [GET] 取得所有房型OK
export const getRoomsList = () => apiRequest.get('/rooms')

// [GET] 單一房型細節
export const getRoomsDetail = data => apiRequest.get(`/room/${id}`, data)

// [POST] 預約房型
/*
https://challenge.thef2e.com/api/thef2e2019/stage6/room/{id}
{id} : RoomItem(房型資料) 當中的 id(房間編號)
POST Parameters 傳送格式 (application/json)
name (string): 訂房者名稱
tel (string): 訂房者電話
date[] (string): 訂房日期，格式 Y-m-d
 */
export const roomBooking = data => apiRequest.post(`/room/${id}`, data)

// [DELETE] 清除所有預約
export const bookingDel = data => apiRequest.del('/rooms', data)
