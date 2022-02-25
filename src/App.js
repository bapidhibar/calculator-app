import React, { useState } from 'react';
import Footer from "./Footer";

function App() {

    const [calc, setCalc] = useState("");
    let [result, setResult] = useState("");
    const ops = ["/", "*", "+", "-", "."];

    const updateCalc = value => {
        if (
            ops.includes(value) && calc === "" ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return;
        }
        setCalc(calc + value);
        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const createDigits = () => {

        const digits = []
        for (let i = 1; i < 10; i++) {
            digits.push(<
                button onClick={
                    () => updateCalc(i.toString())
                }
                key={i} > {i} </button>
            )
        }
        return digits;
    }
    const calculate = () => {
     setCalc(eval(calc).toString());
    }
    const deleteLast = () => {
        if (calc === "") {
            return;
        }
        const value = calc.slice(0, -1);
        setCalc(value);

    }
    const clear = () => {
    setCalc("");
    }
    

    return ( 
        <div>
         <h2 > Calculator </h2> 
        <div className="App" >
       <div className="calculator">
        <div className="display"> 
        {result ? < span > ({result}) </span> : ""} {calc || "0"} 
        </div > 
        <div className="operator" >
            <button onClick={() => updateCalc("/")} > /</button >
            <button onClick={() => updateCalc("*") } > * </button> 
            <button onClick={() => updateCalc("+")} > + </button> 
            <button onClick={() => updateCalc("-")} > - </button> 
            <button onClick={deleteLast} >DEL</button> 
            <button onClick={clear} > AC </button>

            </div> 
            <div className="digit" > {createDigits()} 
            <button onClick={() => updateCalc("0")} > 0 </button> 
            <button onClick={() => updateCalc(".")} > . </button> 
            <button onClick={calculate} >= </button>
            </div>
            </div>
            </div> 
    <Footer />
    </div>
        );
    }

    export default App;