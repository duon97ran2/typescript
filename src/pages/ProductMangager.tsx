import React from 'react'
import { IProduct } from '../types/product'

type ProductMangagerProps = {
  products: IProduct[],
  onRemove: (id: Number | String) => void
}
const ProductMangager = (props: ProductMangagerProps) => {
  return (
    <div>
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