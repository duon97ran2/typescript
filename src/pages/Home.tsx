import { Carousel } from 'antd'
import React from 'react'
import "./Home.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ProductPanel from '../components/ProductPanel';
import NewArrivals from '../components/NewArrivals';
import CategoryPanel from '../components/CategoryPanel';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Carousel arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
        <div className='banner-item'><img src="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-september-vector-banner-iphone-vector-illustration-app-web-presentation-design-vector-banner-iphone-230042240.jpg" alt="" />
        </div>
        <div className='banner-item'><img src="https://didongviet.vn/tin-tuc/wp-content/uploads/2021/04/thumb2-mi-11-ultra-didongviet.jpg" alt="" /></div>
      </Carousel>
      <h2>Categories</h2>
      <CategoryPanel />
      <h2>Our Products</h2>
      <ProductPanel />
      <h2>New Arrivals</h2>
      <NewArrivals />
    </div>
  )
}

export default Home