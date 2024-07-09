import axios from 'axios'
import { BeansResponse } from '../types'

const instance = axios.create({
  baseURL: `https://jellybellywikiapi.onrender.com/api`,
})

export const getBeans = async (pageIndex: number) => {
  return (
    await instance.get<BeansResponse>('/beans', {
      params: {
        pageIndex: pageIndex,
        pageSize: 8,
      },
    })
  ).data
}

export const getInfBeans = async ({
  pageParam,
}: {
  pageParam: number
}): Promise<BeansResponse> => {
  return (
    await instance.get('/beans', {
      params: {
        pageIndex: pageParam,
        pageSize: 12,
      },
    })
  ).data
}
