import axios from './axios'
import qs from 'qs'
import {emailUrl} from '@/config/config'
export const getReceiveEmailList = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: emailUrl + '/api/Email/GetMailReceivingList',
            method: 'get',
            params
        }).then(res => {
            resolve(res.data)
        })
    })
}

export const getEmailList = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: emailUrl + '/api/Email/GetEmilList',
            method: 'get',
            params
        }).then(res => {
            resolve(res.data)
        })
    })
}

export const getManList = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: emailUrl + '/api/Email/GetSchoolDeptByUser',
            method: 'get',
            params
        }).then(res => {
            resolve(res.data)
        })
    })
}
