import axios from './axios'
import qs from 'qs'
import { payrollUrl } from '@/config/config'
export const getTeachsalarydetaileds = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        payrollUrl +
        '/api/TeachSalary/GetTeachsalarydetaileds?' +
        qs.stringify(params),
      method: 'get',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
