import { createContext, use, useContext, useState } from "react";

const UserContext = createContext(null);

export default function TaskContext() {

    const [user, setUser] = useState({
        name: 'TarakRam',
        email: 'tarakjr21@gmail.com',
    });
    
    return(
        <UserContext value={{user, setUser}}>
            <Dashboard />
        </UserContext>
    )
}

function Dashboard(){
    const {user, setUser} = useContext(UserContext);

    return <div>
        <h3>Welcome To Dashboard</h3>
        <p>{user.name} </p>

        <Profile />
        <button onClick={()=> setUser({
            name: "Tabu",
            email: 'tabassumfana@gmail.com',
        })}>Change User</button>
    </div>
}

function Profile() {
    const {user} = useContext(UserContext);

    return(
        <div>
            <h3>Profile: </h3>
            <p>Name : {user.name} </p>
            <p>Email : {user.email} </p>
        </div>
    )
}