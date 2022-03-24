import { IProduct } from "../types/product";
import instance from "./instance";

export const list = () => {
  const url = "/products";
  return instance.get(url);
};
export const add = (product: IProduct) => {
  const url = "/products";
  return instance.post(url, product);
};
export const remove = (id: number | String) => {
  const url = `/products/${id}`;
  return instance.delete(url);
}
export const read = (id: number | String) => {
  const url = `/products/${id}`;
  return instance.get(url);
}
export const update = (product: IProduct) => {
  const url = `/products/${product._id}`;
  return instance.put(url, product);
}