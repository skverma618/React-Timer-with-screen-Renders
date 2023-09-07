import { useState, useRef } from 'react';

function App() {
    const [randomInput, setRandomInput] = useState('');
    const [seconds, setSeconds] = useState(0);

    const renders = useRef(0);
    const inputRef = useRef();
    const timerId = useRef();

    const handleChange = (e) => {
        setRandomInput(e.target.value);
        renders.current++;
    }

    const startTimer = () => {
        if(timerId.current) return; // If there already is a timer running, do nothing, otherwise, multiple setinterval will be created and the timer will run faster
         timerId.current = setInterval( () => {
             renders.current++;
             setSeconds( seconds => seconds + 1);
         }, 1000)
        inputRef.current.focus();
    }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
    }

    const resetTimer = () => {
        stopTimer();
        if(seconds > 0){
            renders.current++;
            setSeconds(0);
        }
    }

    return (
        <main className="App">
            <input
                ref={inputRef}
                type="text"
                value={randomInput}
                placeholder="Random Input"
                onChange={handleChange}
            />
            <p>Renders: {renders.current}</p>
            <br /><br />
            <section>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </section>
            <br /><br />
            <p>Seconds: {seconds}</p>
            <br /><br />
            <p>{randomInput}</p>
        </main>
    );
}

export default App;