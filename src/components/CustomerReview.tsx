import { Card, Col, Rate, Row } from 'antd'
import React from 'react'

type Props = {}
const { Meta } = Card;

const CustomerReview = (props: Props) => {
  return (
    <div>
      <Row gutter={30}>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src="https://i.pravatar.cc/450?img=4" />}
          >
            <Meta title="Chandler Bing" description={<><Rate disabled defaultValue={4} /><p>Lorem ipsum dolor sit amet.</p></>} />
          </Card>,
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src="https://i.pravatar.cc/450?img=33" />}
          >
            <Meta title="Ted Mosby" description={<><Rate disabled defaultValue={5} /><p>Lorem ipsum dolor sit amet.</p></>} />
          </Card>,
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src="https://i.pravatar.cc/450?img=31" />}
          >
            <Meta title="Lily Aldrin" description={<><Rate disabled defaultValue={5} /><p>Lorem ipsum dolor sit amet.</p></>} />
          </Card>,
        </Col>

      </Row> </div>
  )
}

export default CustomerReview