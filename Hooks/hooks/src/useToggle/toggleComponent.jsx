import useToggle from "./useToogle";

export default function ToggleComponent() {
    const [isOn, toggle] = useToggle(false);

    return(
        <div>
            <p> status: { isOn ? 'on' : 'off' } </p>
            <button style={{backgroundColor: 'yellowgreen', color: 'wheat'}} onClick={toggle}> Toggle</button>
        </div>
    )
}