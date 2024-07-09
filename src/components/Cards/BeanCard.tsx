import { Bean } from '../../types'

interface BeanCardProps {
  data: Bean
}
const BeanCard = ({ data }: BeanCardProps) => {
  return (
    <div className="flex justify-between items-center gap-4 max-w-52 flex-col p-4 rounded-2xl border border-red-500 text-red-500">
      <h1 className="text-center">{data.flavorName}</h1>
      <img
        className="h-auto max-w-44"
        src={data.imageUrl}
        alt={data.flavorName}
      />
      <p className="text-xs text-center">{data.description}</p>
    </div>
  )
}

export default BeanCard
