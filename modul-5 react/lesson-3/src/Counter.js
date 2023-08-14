import { useState } from "react";
import "./Counter.css"

function Counter() {

    const [count, setCount] = useState(0)
    const [activeNumber, setActiveNumber] = useState(2)

    return (
        <div className="container">

            <div className="numbers">
                {[2, 3, 5].map(num => 
                    <button onClick={() => (setActiveNumber(num))}
                        className = {activeNumber === num ? "active" : ""}
                        >{num}
                    </button>)}
            </div>

            <div className="counter">
                <button onClick={() => setCount(count + activeNumber)}>+</button>
                <h2>{count}</h2>
                <button onClick={() => setCount(count - activeNumber)}>-</button>
            </div>
            <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;