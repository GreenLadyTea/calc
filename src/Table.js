import React from "react";

export default function Table({ amount, rate, monthlyPayment }) {
    function getTable() {
        let sum = amount;
        let i = 1;
        let percents = 0;
        let body = 0;
        const array = [{
            number: 0,
            payment: "0",
            percents: "0",
            body: "0",
            remaining: sum.toFixed(2)
        }];
        do {
            percents = rate / 100 / 365 * 30 * sum;
            body = monthlyPayment - percents;
            sum = sum - body;
            array.push({
                number: i++,
                payment: monthlyPayment,
                percents: percents.toFixed(2),
                body: body.toFixed(2),
                remaining: sum.toFixed(2)
            })
        }
        while (sum > monthlyPayment);
        percents = rate / 100 / 365 * 31 * sum;
        let payment = sum + percents;
        array.push({
            number: i++,
            payment: payment.toFixed(2),
            percents: percents.toFixed(2),
            body: sum.toFixed(2),
            remaining: "0"
        })
        return array;
    }

    const arr = getTable();

    return (
        <div>
            <table>
                <caption>Таблица платежей</caption>
                <tr>
                    <th>Номер</th>
                    <th>Платеж</th>
                    <th>Проценты</th>
                    <th>Тело кредита</th>
                    <th>Остаток</th>
                </tr>
                {arr.map(item => (
                    <tr
                        key={item.number}
                    >
                        <td>{item.number}</td>
                        <td>{item.payment}</td>
                        <td>{item.percents}</td>
                        <td>{item.body}</td>
                        <td>{item.remaining}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
