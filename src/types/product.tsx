import { CategoryType } from "./category";

export interface IProduct {
  _id?: Number | String,
  name: string,
  price: Number,
  category: CategoryType,
  image: string,
  description: string
}
