import React from "react";

export default function Table({ amount, count, rate }) {
    const d = new Date();
    const date = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear();
    return (
        <div>
            <table>
                <caption>Таблица платежей</caption>
                <tr>
                    <th>Дата</th>
                    <th>Платеж</th>
                    <th>Проценты</th>
                    <th>Тело кредита</th>
                    <th>Остаток</th>
                </tr>
                <tr>
                    <td>{date}</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>{amount}</td>
                </tr>
            </table>
        </div>
    );
}
