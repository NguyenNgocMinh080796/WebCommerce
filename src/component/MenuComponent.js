import React, { useEffect } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CategoryAction } from '../redux/action/ProductAction';
import { useDispatch, useSelector } from 'react-redux';

export default function MenuComponent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CategoryAction())
    }, [])

    const { category } = useSelector(state => state.ProductReducer)
    // console.log('category', category)

    const items = category.map((item) => ({
        key: String(item),
        label: `${item}`,
    }));

    return (
        <Menu onClick={(key) => { navigate(key.key) }} items={items} mode="horizontal" theme='dark' style={{ maxWidth: '100%' }} />
    )
}
