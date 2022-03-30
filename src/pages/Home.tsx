import { Carousel } from 'antd'
import React from 'react'
import "./Home.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ProductPanel from '../components/ProductPanel';
import NewArrivals from '../components/NewArrivals';
import CategoryPanel from '../components/CategoryPanel';
import { IProduct } from '../types/product';
import CustomerReview from '../components/CustomerReview';

type Props = {
  products: IProduct[],
}

const Home = (props: Props) => {
  return (
    <div>

      <div className='banner'>
        <div className="backdrop"></div>
        <Carousel arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} autoplay autoplaySpeed={4000}>
          <div>
            <img src="https://images.unsplash.com/photo-1589677725258-5374c55919fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1616933067642-ac31e646d4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1636384960943-b50b6384ebb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
        </Carousel>
        <div className="banner-text">
          <h1>welcome to our shop</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero ipsam soluta corrupti esse molestiae odit iste, quod error. Facere.</p>
          <button>BUY NOW</button>
        </div>
      </div>


      <h2 style={{ fontSize: "3em", color: "var(--ant-primary-color)" }}>Categories</h2>
      <CategoryPanel />
      <h2 style={{ fontSize: "3em", color: "var(--ant-primary-color)" }}>Our Products</h2>
      <ProductPanel products={props.products} />
      <h2 style={{ fontSize: "3em", color: "var(--ant-primary-color)" }}>New Arrivals</h2>
      <NewArrivals />
      <h2 style={{ fontSize: "3em", color: "var(--ant-primary-color)" }}>Customer Reviews</h2>
      <CustomerReview />
    </div>
  )
}

export default Home