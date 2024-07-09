import axios from 'axios'
import {
  BeansResponse,
  CombinationsResponse,
  FactsResponse,
  MileStonesResponse,
  RecipesResponse,
} from '../types'

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

export const getRecipes = async ({
  pageParam,
}: {
  pageParam: number
}): Promise<RecipesResponse> => {
  return (
    await instance.get('/recipes', {
      params: {
        pageIndex: pageParam,
        pageSize: 12,
      },
    })
  ).data
}

export const getCombinations = async ({
  pageParam,
}: {
  pageParam: number
}): Promise<CombinationsResponse> => {
  return (
    await instance.get('/Combinations', {
      params: {
        pageIndex: pageParam,
        pageSize: 12,
      },
    })
  ).data
}

export const getMilestones = async ({
  pageParam,
}: {
  pageParam: number
}): Promise<MileStonesResponse> => {
  return (
    await instance.get('/Milestones', {
      params: {
        pageIndex: pageParam,
        pageSize: 12,
      },
    })
  ).data
}
