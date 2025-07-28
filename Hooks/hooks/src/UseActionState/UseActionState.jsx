import { useActionState } from "react";

export default function UseActionState() {
    async function submitForm(previousState, formdata) {
        /* it delays the formaction for 5s and display */
        await new Promise((res, rej)=> setTimeout(res, 5000));

        if(formdata.get('username') == "Ram" && formdata.get('password') == '12346')
            if(previousState == "Login Success") return "You've already logged in";
            return "Login Success";
    }

    /* useActionState syntax */
    const [state, formAction, isPending] = useActionState(submitForm, "Fill the form fields");

    return(
        <>
        <h2 style={{marginBottom: 10}}> Use Action State</h2>
        <form action={formAction}>

            <div style={{display: 'flex', flexDirection: 'column'}}>

                <label htmlFor="user Name"> User Name:
                    <input type="text" name="username" id="userName" />
                </label>

                <label htmlFor="password">Password:
                    <input type="password" name="password" id="userPass" />
                </label>

                <button type="submit"> Submit</button>
                <p>
                    {isPending ? 'loading...' : state}
                </p>
            </div>
        </form>
        </>
    )
}