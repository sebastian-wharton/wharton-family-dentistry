function NavToggle() {
    let name = 'mario'
    const handleClick = () {
        name = 'luigi'
        console.log(name)
    }
    return (
        <div className="NavToggle"><h1>My name is {name}</h1>
        <button onClick={}>Toggle Nav</button>
        
        </div>
    )
}