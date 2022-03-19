import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product';

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await fetch(`http://localhost:4000/api/products/${id}`);
      setProduct(data);
    }
    getProduct();
  }, [id]);
  return (

    <div>{product?.name}</div>
  )
}

export default ProductDetail