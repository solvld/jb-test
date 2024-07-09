import { useInView } from 'react-intersection-observer'
import { useInfBeans } from '../../services/queries'
import BeanCard from '../Cards/BeanCard'
import { useEffect } from 'react'

const BeansList = () => {
  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfBeans()
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
          page.items.map((bean, index) => {
            if (page.items.length == index + 1) {
              return <BeanCard data={bean} key={bean.beanId} innerRef={ref} />
            }
            return <BeanCard data={bean} key={bean.beanId} />
          }),
        )}
      </div>
      {(status == 'pending' || isFetchingNextPage) && (
        <p className="text-red-500 text-center">Loading...</p>
      )}
    </>
  )
}

export default BeansList
