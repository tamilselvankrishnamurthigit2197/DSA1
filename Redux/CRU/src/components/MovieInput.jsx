import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../slice/movieSlice";

export default function MovieInput() {
    const [newMovie, setNewMovie] = useState("")
    const dispatch = useDispatch();

    const handleAddMovie = ()=>{
        if(newMovie){
            dispatch(addMovie(newMovie));
            setNewMovie("")
        }
    }

    return(
        <div>
            <input type="text" onChange={(e)=>setNewMovie(e.target.value)}
            value={newMovie} />
            <button onClick={handleAddMovie}> Add Movie</button>
        </div>
    )
}