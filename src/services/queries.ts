import { useInfiniteQuery } from '@tanstack/react-query'
import {
  getBeans,
  getCombinations,
  getFacts,
  getMilestones,
  getRecipes,
} from './fetchApi'

export const useBeans = () => {
  return useInfiniteQuery({
    queryKey: ['beans'],
    queryFn: getBeans,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.totalPages !== allPage.length ? allPage.length + 1 : null
      return nextPage
    },
  })
}

export const useFacts = () => {
  return useInfiniteQuery({
    queryKey: ['facts'],
    queryFn: getFacts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.totalPages !== allPage.length ? allPage.length + 1 : null
      return nextPage
    },
  })
}

export const useRecipes = () => {
  return useInfiniteQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.totalPages !== allPage.length ? allPage.length + 1 : null
      return nextPage
    },
  })
}

export const useCombinations = () => {
  return useInfiniteQuery({
    queryKey: ['Combinations'],
    queryFn: getCombinations,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.totalPages !== allPage.length ? allPage.length + 1 : null
      return nextPage
    },
  })
}

export const useMilestones = () => {
  return useInfiniteQuery({
    queryKey: ['Milestones'],
    queryFn: getMilestones,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.totalPages !== allPage.length ? allPage.length + 1 : null
      return nextPage
    },
  })
}
