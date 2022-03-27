import { Carousel, Row, Col } from 'antd'
import React from 'react'
import "./NewArrivals.css"

type Props = {}

const NewArrivals = (props: Props) => {
  return (
    <div>

      <Carousel autoplay autoplaySpeed={4000}>
        <>
          <Row className="slide">
            <Col className="slide-img" span={16}><img src="https://vcdn-giadinh.vnecdn.net/2021/01/08/Anh-2-8146-1610099449.jpg" alt="" /></Col>
            <Col span={8} className="slide-content">
              <h3>Lorem, ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, beatae. Accusamus earum debitis molestiae minima exercitationem sed ducimus eaque sunt?</p>
              <button>Order</button>
            </Col>
          </Row>
        </>
      </Carousel>
    </div>
  )
}

export default NewArrivals