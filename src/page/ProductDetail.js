import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Col, Image, Row, Space, Typography } from 'antd'
import { useDispatch } from 'react-redux'

const { Title, Text } = Typography

export default function ProductDetail() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log('location', location.state)

    const { id, images, thumbnail, title, description, price, discountPercentage } = location.state

    const addProductToCart = (id) => {
        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: [
                    {
                        id: id,
                        quantity: 1,
                    },
                ]
            })
        })
            // .then(res => { message.success(`${title} has been added to cart!`) })
            .then(res => res.json())
            .then(console.log);
    }

    return (
        <div style={{ height: window.innerHeight, padding: '100px 50px' }}>
            <Row>
                <Col span={12}>
                    <Image.PreviewGroup
                        items={images}
                    >
                        <Image src={thumbnail} alt={title} />
                    </Image.PreviewGroup>
                </Col>
                <Col span={12}>
                    <Title>{title}</Title>
                    <Space direction='vertical' size='large'>
                        <Text>{description}</Text>
                        <div>
                            <Space size='large'>
                                <Text strong >$ {price}</Text>
                                <Text delete type="danger" >$ {parseFloat(price + (price * discountPercentage / 100)).toFixed(2)}</Text>
                            </Space>
                        </div>
                        <Space direction='horizontal'>
                            <Button onClick={() => { addProductToCart(id) }} type='primary'>Add to Cart</Button>
                            <Button onClick={() => { navigate(-1) }}>Back to Home</Button>
                        </Space>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}
