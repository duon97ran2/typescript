import { Button, Form, Input, InputNumber, message, Select } from 'antd';
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { CategoryType } from '../../../types/category';
import { IProduct } from '../../../types/product';

type ProductProps = {
  onAdd: (product: IProduct) => void,
  categories: CategoryType[]
}
// type TypeInputs = {
//   name: String,
//   price: Number,
//   category: String
// }

const ProductAdd = (props: ProductProps) => {
  // const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
  const navigate = useNavigate();
  // const productAdd: SubmitHandler<TypeInputs> = data => {
  //   props.onAdd(data);
  //   navigate("/admin/products");
  // }
  const [form] = Form.useForm<IProduct>();
  const onReset = () => {
    form.resetFields();
    //setFileList([]);
  };
  const onFinishAdd = (post: IProduct) => {
    try {
      props.onAdd(post);
      message.success("Add product success", 2, () => { navigate("/admin/products") });
    } catch (error: any) {
      const { response } = error;
      message.error(response.data.message)
    }

  };
  const onFailedAdd = () => {
    message.error('Some errors happen');
  };
  return (
    <>
      <h2>Add Product</h2>
      <Form {...{ labelCol: { span: 6 }, wrapperCol: { span: 12 } }} name='Add product' onFinish={onFinishAdd} form={form} onFinishFailed={onFailedAdd} validateMessages={{
        required: '${label} is required',
        types: {
          number: '${label} must be a number'
        },
        string: {
          min: "${label} must be at least ${min} character"

        },
        number: {
          min: "${label} must be greater than 0",
          range: "${label} must be between ${min} and ${max}"
        },


      }}>
        <Form.Item name="name" label="Name" rules={[{ required: true, min: 5 }]} >
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true, type: "number", min: 1 }]} >
          <InputNumber />
        </Form.Item>
        <Form.Item name="discount" label="Discount" rules={[{ type: "number", min: 1, max: 99 }]} >
          <InputNumber />
        </Form.Item>
        <Form.Item name="description" label="Description" >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true }]} >
          <Select>
            {props.categories.map((item, index) => <Select.Option value={item._id} key={index + 1}>{item.name}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }} >
          <Button type="primary" htmlType='submit'>Add Product</Button>
          <Button type="default" onClick={onReset}>Reset</Button>
        </Form.Item>
      </Form>
    </>
    // <form onSubmit={handleSubmit(productAdd)}>
    //   <input type="text" placeholder='Product name' {...register("name")} />
    //   <input type="number" placeholder='Product price' {...register("price")} />
    //   <button>Add</button>
    // </form>
  )
}

export default ProductAdd