import { useMemo, useState } from "react";

const fruits = ['Apple', 'Banana', 'Grapes', 'pomegranate'];

export default function SearchFilter() {
    const [search, setSearch] = useState('')
    const [count, setCount] = useState(0)

    /* filter for search */
    const filterItems = useMemo(()=>{
        console.log("Filtering...");

        return fruits.filter(fruit => fruit.toLocaleLowerCase().includes(search.toLocaleLowerCase()));        
    }, [search])

    return (
        <div>
            <h1> Use Memo: filter and search</h1>
            
            <input type="text" placeholder="search fruits" onChange={(e)=> setSearch(e.target.value)} />

            <h3>Filtered Fruits: </h3>
            <ul>
                {
                    filterItems.map((fruit)=>(
                        <li key={fruit.id}>{fruit} </li>
                    ))
                }
            </ul>

            <h3> count: {count}</h3>
            <button onClick={()=> setCount(count => count + 1)}> Count</button>
        </div>
    )
}