import { createSlice } from "@reduxjs/toolkit"

export interface categ {
    id: number;
    name: string;
    expense: number;
    maxExpense: number;
    color: string;
    data: [
      {
        comment: string;
        price: number;
      }
    ];
  }

const initialState:categ[] = []
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory:(state, action) => {
            const category = action.payload
            const isExists = state.some((r) => r.name === category.name);
            if(isExists) {
                return 
            } else {
                state.push(category)    
            }
        }, 
        editCategory: (state, action) => {
            const { id, newData } = action.payload;
            const currCat = state.find((cat) => cat.id === id )
            if(currCat) {
                const index = state.indexOf(currCat)
                state[index].data.push(newData)
                const prices = state[index].data.map((d) => d.price);
                let sum = 0;
                prices.forEach((price) => {
                    console.log(typeof price, typeof sum)
                    return sum += price
                })
                console.log(sum)
                state[index].expense = sum
            }
            
        },
    }
})

export const { actions, reducer } = categorySlice;
