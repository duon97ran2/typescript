import { Button, Image, Space, Table } from 'antd'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { IProduct } from '../../../types/product'

type ProductMangagerProps = {
  products: IProduct[],
  onRemove: (id: Number | String | undefined) => void
}
const ProductMangager = (props: ProductMangagerProps) => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: String) => <a>{text}</a>,
    },
    Table.EXPAND_COLUMN,
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text: String, record: IProduct) => <span>{record.category.name}</span>
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text: String, record: IProduct) =>
        <Image src={record.image} width="200px" alt="" />
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: IProduct) => (
        <Space size="middle">
          <Button><Link to={`${record._id}/edit`}>Edit</Link></Button>
          <Button onClick={() => { props.onRemove(record._id) }} >Delete</Button>
        </Space>
      ),
    }
  ];
  const productData = props.products.map((item, index) => {
    return {
      key: index + 1,
      _id: item._id,
      price: item.price,
      name: item.name,
      category: item.category,
      image: item.image,
      description: item.description
    }
  }
  );
  return (
    <>
      <Button style={{ marginBottom: "20px" }}><Link to="add">Add Product</Link></Button>
      <Table columns={columns} dataSource={productData} expandable={{ expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p> }} />
    </>
  )
}

export default ProductMangager