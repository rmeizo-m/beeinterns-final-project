import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, title: 'First Action!', content: 'Hello World'},
    { id: 2, title: 'Second Reaction!', content: 'Redux is super easy!'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState, 
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
            }
    },
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer