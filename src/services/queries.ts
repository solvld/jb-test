import { useInfiniteQuery } from '@tanstack/react-query'
import { getBeans, getFacts } from './fetchApi'

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
