import { Recipe } from '../../types'

interface RecipeCardProps {
  data: Recipe
  innerRef?: React.Ref<HTMLDivElement>
}
const RecipeCard = ({ data, innerRef }: RecipeCardProps) => {
  return (
    <div
      ref={innerRef}
      className="flex items-center gap-4 max-w-52 flex-col p-4 rounded-2xl border border-red-500 text-red-500"
    >
      <h1 className="text-center font-bold">{data.name}</h1>
      <p className="text-xs text-center">{data.description}</p>
      {data.cookTime && (
        <p className="text-xs font-bold text-center">{`Total time: ${data.cookTime}`}</p>
      )}
    </div>
  )
}

export default RecipeCard
