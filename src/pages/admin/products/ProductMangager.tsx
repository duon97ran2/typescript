import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../../types/product'

type ProductMangagerProps = {
  products: IProduct[],
  onRemove: (id: Number | String | undefined) => void
}
const ProductMangager = (props: ProductMangagerProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => { navigate("/admin/products/add") }}>Add Product</button>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th></th></thead>
        <tbody>
          {props.products.map((item, index) => <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><button onClick={() => props.onRemove(item._id)}>Remove</button></td>
          </tr>)}

        </tbody>
      </table>
    </div >
  )
}

export default ProductMangager