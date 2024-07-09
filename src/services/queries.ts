import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getBeans, getInfBeans } from './fetchApi'

export const useBeans = () => {
  return useQuery({
    queryKey: ['beans'],
    queryFn: () => getBeans(1),
  })
}

export const useInfBeans = () => {
  return useInfiniteQuery({
    queryKey: ['infbeans'],
    queryFn: getInfBeans,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.totalPages !== allPage.length ? allPage.length + 1 : null
      return nextPage
    },
  })
}
