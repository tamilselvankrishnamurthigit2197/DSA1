import { useDispatch, useSelector } from "react-redux"
import { removeMovie, updateMovie } from "../slice/movieSlice";
import { useState } from "react";

export default function MovieList(){
    const movies = useSelector((state) => state.movies.movies); //state.reducer.name
    const dispatch = useDispatch();

    /* edit name , id needs to be stored */
    const [editId, setEditId] = useState(null)
    const [editName, setEditName] = useState("")

    /* handleRemove : delete function dispatch */

    const handleRemove = (id) =>{
        dispatch(removeMovie(id));
    }

    const handleEdit = (id, name) => {
        dispatch(updateMovie({id, name}));
        setEditId(null);
        setEditName("");
    }

    return(
        <div className="MovieList">
            {" "}
            <h2 className="ListHead"> Movie List</h2>
            <ul>
                {movies.map((movie)=>(
                    <li key={movie.id}>
                        {
                            editId === movie.id ? (
                                <>
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e)=>setEditName(e.target.value)}
                                />
                                <button onClick={()=>handleEdit(movie.id, editName)}>
                                    Save</button>
                                </>
                            ) : (
                                <>
                                    {movie.name}
                                    
                                    <button
                                        onClick={()=>{
                                            setEditId(movie.id)
                                            setEditName(movie.name)
                                        }}
                                        className="edit"
                                    >
                                            Edit</button>

                                    <button
                                        onClick={()=>handleRemove(movie.id)}
                                        className="delete"
                                    >
                                    {" "}
                                    Delete
                                    </button>
                                </>
                            )
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}