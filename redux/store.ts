import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '@/redux/features/conuter/counterSlice' 
import  cartSlice  from '@/redux/features/cart/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      cart: cartSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']