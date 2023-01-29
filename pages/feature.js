import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const counterSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    increment: (state,action) => {
        state.push(action.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    selectAndUpdate : (state,action)=>{
      
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,selectAndUpdate} = counterSlice.actions

export default counterSlice.reducer