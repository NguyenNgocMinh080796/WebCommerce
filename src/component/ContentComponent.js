import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../page/ErrorPage'
import ProductDetail from '../page/ProductDetail'
import CategoryPage from '../page/CategoryPage'

export default function ContentComponent() {
    return (
        <Routes>
            <Route path='/' element={<CategoryPage />} />
            <Route path='/:category' element={<CategoryPage />} />
            <Route path='/detail' element={<ProductDetail />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}
