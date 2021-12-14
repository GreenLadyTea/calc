import './App.css';
import React, {useState} from "react";
import Table from "./components/Table";

function App() {
    const [sum, setSum] = useState("");
    const [rate, setRate] = useState("");
    const [term, setTerm] = useState("");
    const [result, setResult] = useState("");
    const [overpay, setOverpay] = useState("");
    const [flag, setFlag] = useState(false);

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
                <h2>Калькулятор аннуитетного кредитования</h2>
            </header>
            <form onSubmit={ handleSubmit }>
                <div className="row">
                    <div className="label">
                        <label htmlFor="sum">
                            Сумма кредита, руб.
                        </label>
                    </div>
                    <div className="field">
                        <input id="sum" value={sum} onChange={e => setSum(e.target.value)} type="text"/>
                    </div>
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
            <button onClick={() => setFlag(!flag)}>Показать таблицу</button>
            {flag === true && (
                <Table amount={Number(sum)} rate={Number(rate)} monthlyPayment={Number(result)}/>
            )}
        </div>
    );
}

export default App;
