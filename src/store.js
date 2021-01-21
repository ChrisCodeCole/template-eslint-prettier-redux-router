import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import loggerMiddleware from './middleware/logger'
import counterReducer from './reducers/counterSlice'

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
	middleware: [loggerMiddleware, ...getDefaultMiddleware()],
})

export default store
