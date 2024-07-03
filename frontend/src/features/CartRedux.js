import { createSlice } from "@reduxjs/toolkit";

export const cartItems = createSlice({
    name:"cartItems",
    initialState:{
        carts:[],
        loading:false,
        error:null
    },

    reducers:{
        adding:(state,action)=>{
           const getItem = {
                id:action.payload.id,
                name:action.payload.name,
                price:action.payload.price,
                image:action.payload.image,
                quantity:action.payload.quantity,
                total:action.payload.total
           };
           state.loading=false
           state.error = null

           const existingItem = state.carts.find((item)=>{
            return item.id === action.payload.id
           })
           if(existingItem){
            existingItem.quantity += getItem.quantity
           }else{
            state.carts.push(getItem)
           }

        },
        removing: (state,action)=>{
            state.loading = false
            state.error = null
            state.carts = state.carts.filter((item)=>{
                return action.payload.id !== item.id
            })
        },
        updating: (state,action)=>{
            state.loading = false
            state.error = null
            state.carts = state.carts.map((item)=>{
                return action.payload.id === item.id ? action.payload : item
            })

        }
    }
})



export const {adding, removing, updating} = cartItems.actions
export default cartItems.reducer