import axios from 'axios'
import { BeansResponse, FactsResponse } from '../types'

const instance = axios.create({
  baseURL: `https://jellybellywikiapi.onrender.com/api`,
})

export const getBeans = async ({
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
export const getFacts = async ({
  pageParam,
}: {
  pageParam: number
}): Promise<FactsResponse> => {
  return (
    await instance.get('/facts', {
      params: {
        pageIndex: pageParam,
        pageSize: 12,
      },
    })
  ).data
}
