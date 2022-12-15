import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    upvotes: 0,
    downvotes: 0,
    comments: [
        {
            author: 'Benedict',
            timePosted: Date(2022, 05, 15, 12, 0, 0),
            comment: 'I love this!',
        },
    ],
};
0
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                author: action.payload.author,
                timePosted: new Date(),
                comment: action.payload.comment,
            }
            state.comments.push(newComment)
        },
        deleteComment: (state, action) => {
            
        },
        upvote: (state) => {
            state.upvotes += 1;
        },
        downvote: (state) => { 
            state.downvotes -= 1;
        }
    }
})