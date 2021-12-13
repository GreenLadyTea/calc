import './App.css';
import React, {useState} from "react";
import Table from "./Table";

function App() {
    const [sum, setSum] = useState("");
    const [rate, setRate] = useState("");
    const [term, setTerm] = useState("");
    const [result, setResult] = useState("");
    const [overpay, setOverpay] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const r = Number(rate);
        const t = Number(term);
        const s = Number(sum);

        const ratePerMonth = (r / 12) / 100;
        const monthlyPayment = s * ratePerMonth / (1 - Math.pow(1 + ratePerMonth, 0 - t));
        const overpayment = monthlyPayment * t - s;

        setResult(monthlyPayment.toFixed(2));

        setOverpay(overpayment.toFixed(2));
    }

    return (
        <div className="App">
            <header className="App-header">
                Калькулятор аннуитетного кредитования
            </header>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label>
                        Сумма кредита, руб.
                        <input value={sum} onChange={e => setSum(e.target.value)} type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        Ставка по кредиту, % годовых.
                        <input value={rate} onChange={e => setRate(e.target.value)} type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        Срок, мес.
                        <input value={term} onChange={e => setTerm(e.target.value)} type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="submit" value="Рассчитать"/>
                    </label>
                </div>
            </form>
            <div className="monthly-payment">
                Ежемесячный платеж по кредиту составит: {result} руб.
            </div>
            <div>
                Переплата по кредиту составит: {overpay} руб.
            </div>
            <Table amount={Number(sum)} count={Number(term)} rate={Number(rate)}/>
        </div>
    );
}

export default App;
