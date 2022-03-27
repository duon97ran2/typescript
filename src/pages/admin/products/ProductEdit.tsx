import { Button, Form, Input, InputNumber, message, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/products';
import { CategoryType } from '../../../types/category';
import { IProduct } from '../../../types/product';

type ProductEditProps = {
  onUpdate: (product: IProduct) => void,
  categories: CategoryType[]
};
type formInput = {
  name: String,
  price: Number
}

const ProductEdit = (props: ProductEditProps) => {
  const [product, setProduct] = useState<IProduct>();
  const [form] = Form.useForm<IProduct>();
  const onReset = () => {
    form.resetFields();
    //setFileList([]);
  };
  // const { register, handleSubmit, reset, formState: { errors } } = useForm<formInput>();
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const updateSubmit: SubmitHandler<formInput> = (data: IProduct) => {
  //   props.onUpdate(data);
  //   navigate("/admin/products")
  // };

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const { data } = await read(id);
  //     console.log(data);
  //     reset(data);
  //   };
  //   getProducts();
  // }, [])
  // return (
  //   <form onSubmit={handleSubmit(updateSubmit)}
  //   >
  //     <input type="text" {...register("name", { required: true })} />
  //     <input type="number" {...register("price", { required: true })} />
  //     <button>Update</button>
  //   </form>
  // )
  const { id } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await read(id);
      setProduct(data);
      form.setFieldsValue(data);
    };
    getProducts();
  }, []);
  const navigate = useNavigate();
  const onFinishUpdate = (post: IProduct) => {
    try {
      post._id = id;
      props.onUpdate(post);
      message.success("Update product success", 2, () => { navigate("/admin/products") });
    } catch (error: any) {
      const { response } = error;
      message.error(response.data.message)
    }

  };
  const onFailedUpdate = () => {
    message.error('Some errors may happen');
  };
  return (<>
    <h2>Edit Product: {product?.name}</h2>
    <Form {...{ labelCol: { span: 6 }, wrapperCol: { span: 12 } }} form={form} name='Add product' onFinish={onFinishUpdate} onFinishFailed={onFailedUpdate} validateMessages={{
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
        <Button type="primary" htmlType='submit'>Update Product</Button>
        <Button type="default" onClick={onReset}>Reset</Button>
      </Form.Item>
    </Form>
  </>)
}

export default ProductEdit