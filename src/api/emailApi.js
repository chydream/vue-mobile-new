import axios from './axios'
import qs from 'qs'
import {emailUrl, baseUrl2} from '@/config/config'
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

export const getEmailType = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: emailUrl + '/api/Email/GetEmilType',
            method: 'get',
            params
        }).then(res => {
            resolve(res.data)
        })
    })
}

export const addEmail = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: emailUrl + '/api/Email/AddEmil',
            method: 'post',
            data: qs.stringify(params)
        }).then(res => {
            resolve(res.data)
        })
    })
}

export const uploadFile = (formData) => {
    return new Promise((resolve, reject) => {
        axios.post(
        baseUrl2 + '/api/File/UploadFileV2', 
            formData, 
            { 
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        ).then(res => {
            resolve(res.data) 
        })      
    })
}

export const read = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: emailUrl + '/api/Email/UpEmailReadStatus',
            method: 'get',
            params
        }).then(res => {
            resolve(res.data)
        })
    })
}

export const getFujian = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: emailUrl + '/api/Email/Download',
            method: 'get',
            params
        }).then(res => {
            resolve(res.data)
        })
    })
}
