import Axios from 'axios'
import { GET_PRODUCT, GET_PRODUCT_BY_CATEGORY, GET_PRODUCT_DETAIL, SET_CATEGORY } from '../type/ProductType'

export const CategoryAction = () => {
    return dispatch => {
        const promise = Axios({
            url: 'https://dummyjson.com/products/categories',
            method: 'GET'
        })
        promise.then((result) => {
            // console.log('CategoryAction', result.data)
            dispatch({
                type: SET_CATEGORY,
                category: result.data
            })
        }).catch((error) => {
            console.log('error', error)
        })
    }
}
export const ProductAction = () => {
    return dispatch => {
        const promise = Axios({
            url: 'https://dummyjson.com/products',
            method: 'GET'
        })
        promise.then((result) => {
            // console.log('ProductAction', result.data.products)
            dispatch({
                type: GET_PRODUCT,
                products: result.data.products
            })
        }).catch((error) => {
            console.log('error', error)
        })
    }
}
export const ProductByCategoryAction = (category) => {
    return dispatch => {
        const promise = Axios({
            url: `https://dummyjson.com/products/category/${category}`,
            method: 'GET'
        })
        promise.then((result) => {
            // console.log('ProductByCategoryAction', result.data.products)
            dispatch({
                type: GET_PRODUCT_BY_CATEGORY,
                products: result.data.products
            })
        }).catch((error) => {
            console.log('error', error)
        })
    }
}
export const DetailProductAction = (id) => {
    return dispatch => {
        const promise = Axios({
            url: `https://dummyjson.com/products/${id}`,
            method: 'GET'
        })
        promise.then((result) => {
            // console.log('DetailProductAction', result.data)
            dispatch({
                type: GET_PRODUCT_DETAIL,
                productDetail: result.data
            })
        }).catch((error) => {
            console.log('error', error)
        })
    }
}
export const SearchProductAction = (productname) => {
    return dispatch => {
        const promise = Axios({
            url: `https://dummyjson.com/products/search?q=${productname}`,
            method: 'GET'
        })
        promise.then((result) => {
            // console.log('SearchProductAction', result.data.products)
            dispatch({
                type: GET_PRODUCT_BY_CATEGORY,
                products: result.data.products
            })
        }).catch((error) => {
            console.log('error', error)
        })
    }
}
