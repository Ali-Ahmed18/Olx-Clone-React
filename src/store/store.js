import { configureStore } from '@reduxjs/toolkit'
import myAdsSlice from './slices/myAdsSlice'
import isActiveSlice from './slices/isActiveSlice'
import likePostSlice from './slices/likePostSlice'
import loginSlice from './slices/loginSilce.js'
import favouriteAdsSlice from './slices/favouriteAdsSlice.js'
import isDeleteSlice from './slices/deletePostSlice.js'
import updatePostSlice from './slices/updatePostSlice.js'
import singlePostSlice from './slices/singlePostSlice.js'

const store = configureStore({
  reducer: {
    myAdsSlice,
    isActiveSlice,
    likePostSlice,
    loginSlice,
    favouriteAdsSlice,
    isDeleteSlice,
    updatePostSlice,
    singlePostSlice
  },
})

export default store