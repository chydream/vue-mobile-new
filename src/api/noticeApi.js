import axios from './axios'
import qs from 'qs'
import { noticeUrl } from '@/config/config'
export const getSchoolGradeList = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        noticeUrl +
        '/api/Notice/GetSchoolGradeList?data=' +
        JSON.stringify(params),
      method: 'get',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const getSchoolClassList = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        noticeUrl +
        '/api/Notice/GetSchoolClassList?data=' +
        JSON.stringify(params),
      method: 'get',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const sendNotice = params => {
  return new Promise((resolve, reject) => {
    axios({
      url: noticeUrl + '/api/Notice/SendNotice?data=' + JSON.stringify(params),
      method: 'get',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const getMyNoticeList = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        noticeUrl +
        '/api/Notice/GetMyNoticeList?data=' +
        JSON.stringify(params),
      method: 'get',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const getNoticeListV2 = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        noticeUrl +
        '/api/Notice/GetNoticeListV2?data=' +
        JSON.stringify(params),
      method: 'get',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const delNotice = params => {
  return new Promise((resolve, reject) => {
    axios({
      url: noticeUrl + '/api/Notice/DelNotice?data=' + JSON.stringify(params),
      method: 'get',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const editNotice = params => {
  return new Promise((resolve, reject) => {
    axios({
      url: noticeUrl + '/api/Notice/EditNotice',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const addNoticeReadRecord = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        noticeUrl +
        '/api/Notice/AddNoticeReadRecord?data=' +
        JSON.stringify(params),
      method: 'get',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const addNoticeV2 = params => {
  return new Promise((resolve, reject) => {
    axios({
      url: noticeUrl + '/api/Notice/AddNoticeV2',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
