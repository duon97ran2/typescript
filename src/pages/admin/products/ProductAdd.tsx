import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

type ProductProps = {
  onAdd: (product: TypeInputs) => void
}
type TypeInputs = {
  name: String,
  price: Number,
}

const ProductAdd = (props: ProductProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
  const navigate = useNavigate();
  const productAdd: SubmitHandler<TypeInputs> = data => {
    props.onAdd(data);
    navigate("/admin/products");
  }
  return (
    <form onSubmit={handleSubmit(productAdd)}>
      <input type="text" placeholder='Product name' {...register("name")} />
      <input type="number" placeholder='Product price' {...register("price")} />
      <button>Add</button>
    </form>
  )
}

export default ProductAdd