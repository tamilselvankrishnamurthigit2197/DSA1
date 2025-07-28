import { useEffect, useState } from "react"

export default function FetchAPI() {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function fetchPosts(){
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>{
            setData(data)
            setLoading(false)
        }).catch(error =>{
            setError(error)
            setLoading(false)
        })
    }

    /* triggers the fetch once the page is loaded */
    useEffect(()=>{
        fetchPosts();
    },[])

    return(
        <>
        <div>
            <h2 style={{marginBottom: 10}}> Use Effect</h2>
        <p> Fetched Data</p>
        <button> Fetch</button>
        <ul>
            {data &&  data.map((item)=>{
                return <li key={item.id}>
                    <h2>{item.title} </h2>
                    <p>{item.body} </p>
                </li>
            })}
        </ul>
        </div>
        </>
    )
}