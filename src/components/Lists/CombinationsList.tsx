import { useInView } from 'react-intersection-observer'
import { useCombinations } from '../../services/queries'
import { useEffect } from 'react'
import CombinationCard from '../Cards/CombinationCard'

const CombinationsList = () => {
  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useCombinations()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-52 md:max-w-[890px] m-auto pt-8">
        {data?.pages.map(page =>
          page.items.map((item, index) => {
            if (page.items.length == index + 1) {
              return (
                <CombinationCard
                  data={item}
                  key={item.combinationId}
                  innerRef={ref}
                />
              )
            }
            return <CombinationCard data={item} key={item.combinationId} />
          }),
        )}
      </div>
      {(status == 'pending' || isFetchingNextPage) && (
        <p className="text-red-500 text-center">Loading...</p>
      )}
    </>
  )
}

export default CombinationsList
