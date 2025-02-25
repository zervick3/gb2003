// src/scripts/updateResult.js

// Importamos los datos desde el archivo JSON
import data from '../data/turtledata.json';

// Función para actualizar el resultado
function updateResult() {
    const rowInput = document.getElementById("rowInput");
    const sdSelect = document.getElementById("sdSelect");
    const categorySelect = document.getElementById("categorySelect");
    const valueDisplay = document.getElementById("valueDisplay");

    const row = parseInt(rowInput.value, 10);
    const sd = sdSelect.value;
    const category = categorySelect.value;

    let displayValue = "N/A";

    // Validamos que el número esté entre 1 y 20
    if (!isNaN(row) && row >= 1 && row <= 20) {
        // Para "1SD" usamos el número tal cual; para "2SD" sumamos 20
        const key = sd === "1SD" ? row.toString() : (row + 20).toString();

        if (
            data[sd] &&
            data[sd][category] &&
            Object.prototype.hasOwnProperty.call(data[sd][category], key)
        ) {
            const value = data[sd][category][key];
            displayValue = value === null || value === undefined ? "N/A" : value.toString();
        }
    }

    valueDisplay.textContent = displayValue;
}

// Asignamos los event listeners
document.getElementById("rowInput").addEventListener("input", updateResult);
document.getElementById("sdSelect").addEventListener("change", updateResult);
document.getElementById("categorySelect").addEventListener("change", updateResult);

// Actualizamos el resultado de forma inicial
updateResult();
