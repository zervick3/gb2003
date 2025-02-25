import React, { useState } from "react";
import data from "../data/turtledata.json";
import "../css/GBTurtle2.css"; // O bien, si prefieres, crea un CSS específico para este componente

const TurtleForm = () => {
    const [row, setRow] = useState("");
    const [sd, setSd] = useState("1SD");
    const [category, setCategory] = useState("65");

    const computeValue = () => {
        const rowInt = parseInt(row, 10);
        if (!isNaN(rowInt) && rowInt >= 1 && rowInt <= 20) {

            // Para "1SD" usamos el número tal cual; para "2SD" sumamos 20 (las claves van de 21 a 40)
            const key = sd === "1SD" ? rowInt.toString() : (rowInt + 20).toString();

            if (
                data[sd] &&
                data[sd][category] &&
                Object.prototype.hasOwnProperty.call(data[sd][category], key)

            ) {
                const value = data[sd][category][key];
                return value === null || value === undefined ? "N/A" : value.toString();
            }
        }
        return "N/A"
    };

    const displayValue = computeValue();

    return (
        <div className="container">
            <h2 className="float">GunBound 2004 - Turtle</h2>
            <form id="dataForm">
                <label className="label-boomer" htmlFor="rowInput">
                    Número (1 al 20):
                </label>
                <input
                    type="number"
                    id="rowInput"
                    min="1"
                    max="40"
                    placeholder="Ingresa un número del 1 al 40"
                    value={row}
                    onChange={(e) => setRow(e.target.value)}
                />

                <label className="label-boomer" htmlFor="sdSelect">
                    Seleccione SD:
                </label>
                <select
                    className="Direction"
                    id="sdSelect"
                    value={sd}
                    onChange={(e) => setSd(e.target.value)}
                >
                    <option value="1SD">1SD</option>
                    <option value="2SD">2SD</option>
                </select>

                <label className="label-boomer" htmlFor="categorySelect">
                    Seleccione categoría:
                </label>
                <select
                    className="Direction"
                    id="categorySelect"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="65">65</option>
                    <option value="70">70</option>
                    <option value="75">75</option>
                    <option value="80">80</option>
                    <option value="Full">Full</option>
                    <option value="60">60</option>

                </select>
            </form>

            <div className="result table-container custom-box">
                Valor: <span id="valueDisplay">{displayValue}</span>
            </div>
        </div>
    );
};

export default TurtleForm;
