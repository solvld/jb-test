import { Fact } from '../../types'

interface FactCardProps {
  data: Fact
  innerRef?: React.Ref<HTMLDivElement>
}
const FactCard = ({ data, innerRef }: FactCardProps) => {
  return (
    <div
      ref={innerRef}
      className="flex justify-between items-center gap-4 max-w-52 flex-col p-4 rounded-2xl border border-red-500 text-red-500"
    >
      <h1 className="text-center">{data.title}</h1>
      <p className="text-xs text-center">{data.description}</p>
    </div>
  )
}

export default FactCard
