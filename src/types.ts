export interface ResponseData {
  totalCount: number
  pageSize: number
  currentPage: number
  totalPages: number
}

export interface Bean {
  beanId: number
  groupName: string[]
  ingredients: string[]
  flavorName: string
  description: string
  colorGroup: string
  backgroundColor: string
  imageUrl: string
  sugarFree: boolean
  seasonal: boolean
  kosher: boolean
}

export interface Fact {
  factId: number
  title: string
  description: string
}

export interface Recipe {
  recipeId: number
  name: string
  description: string
  prepTime: string
  cookTime: string
  totalTime: string
  makingAmount: string
  imageUrl: string
  ingredients: string[]
  additions1: string[]
  additions2: []
  additions3: []
  directions: string[]
  tips: string[]
}

export interface Combination {
  combinationId: number
  name: string
  tag: string[]
}

export interface MileStone {
  mileStoneId: number
  year: number
  description: string
}

export interface BeansResponse extends ResponseData {
  items: Bean[]
}

export interface FactsResponse extends ResponseData {
  items: Fact[]
}

export interface RecipesResponse extends ResponseData {
  items: Recipe[]
}

export interface CombinationsResponse extends ResponseData {
  items: Combination[]
}

export interface MileStonesResponse extends ResponseData {
  items: MileStone[]
}
