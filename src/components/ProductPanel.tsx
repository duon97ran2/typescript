import { Card, Row, Col } from 'antd'
import React from 'react'

type Props = {}
const ProductPanel = (props: Props) => {
  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" className='product-item' bordered={true}>
              <img src="https://i7.pngguru.com/preview/562/852/893/hoodie-t-shirt-clothing-bluza-sweater-t-shirt.jpg" alt="" />
              <h4>Price</h4>
              <button>Buy Now</button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" className='product-item' bordered={true}>
              <img src="https://i7.pngguru.com/preview/562/852/893/hoodie-t-shirt-clothing-bluza-sweater-t-shirt.jpg" alt="" />
              <h4>Price</h4>
              <button>Buy Now</button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" className='product-item' bordered={true}>
              <img src="https://i7.pngguru.com/preview/562/852/893/hoodie-t-shirt-clothing-bluza-sweater-t-shirt.jpg" alt="" />
              <h4>Price</h4>
              <button>Buy Now</button>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  )
}

export default ProductPanel