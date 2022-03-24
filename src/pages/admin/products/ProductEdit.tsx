import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/products';
import { IProduct } from '../../../types/product'

type ProductEditProps = {
  onUpdate: (product: IProduct) => void
};
type formInput = {
  name: String,
  price: Number
}

const ProductEdit = (props: ProductEditProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<formInput>();
  const { id } = useParams();
  const navigate = useNavigate();
  const updateSubmit: SubmitHandler<formInput> = (data: IProduct) => {
    props.onUpdate(data);
    navigate("/admin/products")
  };

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await read(id);
      console.log(data);
      reset(data);
    };
    getProducts();
  }, [])
  return (
    <form onSubmit={handleSubmit(updateSubmit)}
    >
      <input type="text" {...register("name", { required: true })} />
      <input type="number" {...register("price", { required: true })} />
      <button>Update</button>
    </form>
  )
}

export default ProductEdit