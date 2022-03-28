import { Card, Row, Col, Tooltip } from 'antd'
import React from 'react'
import { EllipsisOutlined, HeartFilled, ShoppingFilled, ShoppingTwoTone } from '@ant-design/icons';
import { color } from '@mui/system';
import { IProduct } from '../types/product';

const { Meta } = Card;


type Props = {
  products: IProduct[],
}
const ProductPanel = (props: Props) => {
  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={[30, 30]}>
          {props.products.map((item, index) => <Col span={8} key={index + 1}>
            <Card title={item.name} hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src={item.image}
                />
              }
              headStyle={{ fontSize: "24px", textTransform: "capitalize", fontWeight: "bold", background: "#1890ff", color: "white" }}
              actions={[
                <Tooltip placement='top' title="Add to cart">
                  <ShoppingTwoTone style={{ fontSize: "20px" }} key="addtocart" />
                </Tooltip>,
                <Tooltip placement='top' title="Add to favorite">
                  <HeartFilled style={{ fontSize: "20px", color: "crimson" }} key="Heart" />
                </Tooltip>,
                <Tooltip placement='top' title="View more">
                  <EllipsisOutlined style={{ fontSize: "20px" }} key="ellipsis" />
                </Tooltip>
              ]}
            >
              <Meta
                title={`Price: ${item.price}$`}
                description={item.description} style={{ minHeight: "10vh" }}
              />
            </Card>
          </Col>)}

        </Row>
      </div>
    </div>
  )
}

export default ProductPanel