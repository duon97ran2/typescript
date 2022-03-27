import instance from "./instance";

export const getCategories = () => {
  const url = "category";
  return instance.get(url);
}