import { createSlice } from "@reduxjs/toolkit";

/* initial state */
const initialState = {
    movies: [
        {id: 1, name: 'Interstellar'},
        {id: 2, name: 'Memento'},
    ],
};

/* createSlice */
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovie: (state, action)=>{
            const newId = state.movies.length ? state.movies[state.movies.length -1 ].id + 1 : 1;
            const newMovie = {id: newId, name: action.payload};
            state.movies.push(newMovie);
        },
        removeMovie: (state, action)=>{
            state.movies = state.movies.filter((movie)=> movie.id !== action.payload);
        },
        updateMovie: (state, action) =>{
            const {id, name} = action.payload;

            const movie = state.movies.find((movie)=> movie.id === id);
            if(movie) movie.name = name;
        }
    }
})

/* reducer and actions export */
export const { addMovie, removeMovie, updateMovie } = movieSlice.actions;

export default movieSlice.reducer;