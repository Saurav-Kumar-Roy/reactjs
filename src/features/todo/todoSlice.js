import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    data:[
        {id:1,title:'t1',body:'task1',isDone:true},
        {id:2,title:'t2',body:'task2',isDone:false},
        {id:3,title:'t3',body:'task3',isDone:true}
    ]
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add:(state,action)=>{
            const newData = action.payload
            state.data =[...state.data,newData]    
        },
        del:(state,action)=>{
            const id = action.payload
            state.data = state.data.filter(obj => obj.id!==id);
        },
        update:(state,action)=>{
            const index = action.payload.index;
            const newData = action.payload.newData;
            state.data[index].title = newData.title;
            state.data[index].body = newData.body;
            state.data[index].isDone = newData.isDone; 
        }
    }

})

export default todoSlice.reducer
export const {add, del, update} = todoSlice.actions