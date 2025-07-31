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
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
            flexDirection: 'column'
        }}>
            {" "}
            <h2> Movie List</h2>
            <ul style={{listStyle: 'none'}}>
                {movies.map((movie)=>(
                    <li
                        key={movie.id}
                        style={{
                            alignContent:'space-between',
                            margin: '.4rem',
                        }}
                    >
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
                                        style={{
                                            backgroundColor: 'tomato',
                                            color: 'ButtonText',
                                            padding: '.4rem',
                                            margin: '.2rem'
                                        }}
                                        onClick={()=>{
                                            setEditId(movie.id)
                                            setEditName(movie.name)
                                        }}>
                                            Edit</button>

                                    <button
                                        onClick={()=>handleRemove(movie.id)}
                                        style={{
                                            backgroundColor: 'blueviolet',
                                            padding: '.4rem',
                                            color: 'ButtonText',
                                            margin: '.2rem'
                                        }}
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