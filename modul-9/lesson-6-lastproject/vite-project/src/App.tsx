function App() {
    const [name, setName] = useState("")

    function changeHandler(event: FormEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    return (
        <div className="app">
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={changeHandler}/>
                </label>
            </form>
        </div>
    )
}

export default App