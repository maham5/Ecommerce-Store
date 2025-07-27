import { createSlice } from "@reduxjs/toolkit";
 const initialState ={
    items:[],
    status:false
 }

 const cartSlice = createSlice({
    name:' cart',
  initialState,
  reducers:{
    addToCart(state,action){
        const{productId , quantity } = action.payload;

        const indexId = (state.items).findIndex(item => item.productId === productId)
        if(indexId >= 0){
            state.items[indexId].quantity += quantity;
        }else{
            state.items.push({productId , quantity});
        }
       
    },

    changeQuantity(state, action){
        const {productId, quantity} = action.payload;
        const indexProductId = (state.items).findIndex(item => item.productId === productId);
        if(quantity > 0){
            state.items[indexProductId].quantity = quantity;
        }else{
            state.items = (state.items).filter(item => item.productId !== productId);
        }
        localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab(state){
        if(state.status === false){
            state.status = true;
        }else{
            state.status = false;
        }
    }
  }

 }) 
 export  const {addToCart , changeQuantity ,toggleStatusTab} = cartSlice.actions;
  export default cartSlice.reducer;