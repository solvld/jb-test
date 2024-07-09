import { Combination } from '../../types'

interface CombinationCardProps {
  data: Combination
  innerRef?: React.Ref<HTMLDivElement>
}
const CombinationCard = ({ data, innerRef }: CombinationCardProps) => {
  return (
    <div
      ref={innerRef}
      className="flex items-center gap-4 max-w-52 flex-col p-4 rounded-2xl border border-red-500 text-red-500"
    >
      <h1 className="text-center font-bold">{data.name}</h1>
      <p className="text-xs text-center">{data.tag}</p>
      <ul>
        {data.tag.map((tag, index) => (
          <li key={index} className="text-xs text-center">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CombinationCard
