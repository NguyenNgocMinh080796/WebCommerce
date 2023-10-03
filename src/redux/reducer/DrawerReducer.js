import { CLOSE_DRAWER, OPEN_DRAWER } from "../type/DrawerType"

const initialState = {
    isDrawerOpen: false,
    contentDrawer: <p>contentDrawer</p>
}

export const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DRAWER: {
            state.isDrawerOpen = true;
            state.contentDrawer = action.contentDrawer

            return { ...state }
        }
        case CLOSE_DRAWER: {
            return { ...state, isDrawerOpen: false }
        }
        default:
            return { ...state }
    }
}
