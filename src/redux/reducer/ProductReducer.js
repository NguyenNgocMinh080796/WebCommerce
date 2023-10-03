import { GET_PRODUCT, GET_PRODUCT_BY_CATEGORY, GET_PRODUCT_DETAIL, SET_CATEGORY } from "../type/ProductType"

const initialState = {
    category: [],
    products: [],
    productDetail: {},
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY: {
            state.category = action.category
            return { ...state }
        }
        case GET_PRODUCT: {
            state.products = action.products
            return { ...state }
        }
        case GET_PRODUCT_BY_CATEGORY: {
            state.products = action.products
            return { ...state }
        }
        case GET_PRODUCT_DETAIL: {
            state.productDetail = action.productDetail
            return { ...state }
        }
        default:
            return { ...state }
    }
}
