import React, { useEffect } from 'react'
import { Badge, Button, Card, Col, Popover, Rate, Row, Space, Typography, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { ProductAction, ProductByCategoryAction } from '../redux/action/ProductAction';
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const { Meta } = Card;
const { Paragraph } = Typography;

export default function CategoryPage() {
    const param = useParams()
    // console.log('param', param.category)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!param.category) {
            dispatch(ProductAction())
        } else {
            dispatch(ProductByCategoryAction(param.category))
        }
    }, [param.category])

    const { products } = useSelector(state => state.ProductReducer)

    // PRODUCT LIST 
    const renderProduct = () => {
        return products?.map((pro, index) => {
            return <Col key={index} span={6}>
                <Badge.Ribbon text={`${pro.discountPercentage}% OFF`} color='red'>
                    <Popover placement='left' content={<p style={{ width: 200 }}>{pro.description}</p>}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt={pro.title} src={pro.thumbnail} style={{ height: 200 }} />}
                            actions={[
                                <Rate value={pro.rating} allowHalf disabled style={{ fontSize: 15 }} />,
                                <Button onClick={() => { addProductToCart(pro) }} type='link'>Add to Cart</Button>,
                                // <NavLink to='/detail' state={pro} style={{ color: 'blue' }}>Detail</NavLink>
                            ]}
                        >
                            <Meta title={pro.title} description={
                                <Paragraph
                                    ellipsis={{
                                        rows: 2,
                                        expandable: true,
                                        symbol: 'More',
                                    }}
                                >
                                    {pro.description}
                                </Paragraph>} />
                        </Card>
                    </Popover>
                </Badge.Ribbon>
            </Col >
        })
    }

    const addProductToCart = (pro) => {
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: [
                    {
                        id: pro.id,
                        quantity: 1,
                    },
                ]
            })
        })
            .then(res => { message.success(`${pro.title} has been added to cart!`) })
        // .then(res => res.json())
        // .then(console.log);
    }

    return (
        <div>
            {/* PRODUCT LIST */}
            <div style={{ padding: '100px 50px' }}>
                <Space direction='vertical'>
                    <Row gutter={[32, 32]}>
                        {renderProduct()}
                    </Row>
                </Space>
            </div>
        </div >
    )
}
