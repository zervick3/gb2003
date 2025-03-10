// src/utils/calculateAngle.ts

// Exporta la función para poder usarla en otros archivos
export function calculate(): void {
    // (Tu lógica de cálculo del ángulo aquí)
    const powerInput = document.getElementById("power") as HTMLInputElement;
    const distanceInput = document.getElementById("distance") as HTMLInputElement;
    const windAccInputElement = document.getElementById("windAcc") as HTMLInputElement;
    const gravityDisplay = document.getElementById("gravityDisplay") as HTMLElement;
    const resultDisplay = document.getElementById("result") as HTMLElement;

    const powerValue: number = parseFloat(powerInput.value);
    const distanceInches: number = parseFloat(distanceInput.value);
    const windAccInput: number = parseFloat(windAccInputElement.value);
    const gravityText: string = gravityDisplay.textContent || "";
    const g: number = parseFloat(gravityText);

    // Validación de entradas
    if (
        isNaN(powerValue) || powerValue <= 0 ||
        isNaN(distanceInches) || distanceInches <= 0 ||
        isNaN(windAccInput) ||
        isNaN(g)
    ) {
        resultDisplay.textContent = "Por favor, ingresa todos los valores válidos.";
        return;
    }

    // Conversión de la distancia de pulgadas a metros
    const d: number = distanceInches * 0.0254;

    // Calcular la componente efectiva del viento (suponiendo que windDirection es global)
    const windDirection: number = (window as any).windDirection || 0;
    const windDirRad: number = (windDirection * Math.PI) / 180;
    const a_eff: number = windAccInput * Math.cos(windDirRad);

    // Definir la constante A = (d * g²)/(powerValue²)
    const A: number = (d * g * g) / (powerValue * powerValue);

    // Función objetivo f(α) = g*sin(2α) + 2*a_eff*sin²(α) - A
    const f = (alpha: number): number => {
        return g * Math.sin(2 * alpha) + 2 * a_eff * Math.pow(Math.sin(alpha), 2) - A;
    };

    // Método de bisección para resolver f(α)=0 en [0, π/2]
    let lower: number = 0;
    let upper: number = Math.PI / 2;
    const tolerance: number = 1e-6;
    const maxIterations: number = 100;
    let iteration = 0;

    // Verificar cambio de signo
    if (f(lower) * f(upper) > 0) {
        resultDisplay.textContent = "No es posible calcular el ángulo con estos valores.";
        return;
    }

    let mid: number = 0;
    while ((upper - lower) > tolerance && iteration < maxIterations) {
        mid = (lower + upper) / 2;
        if (f(lower) * f(mid) < 0) {
            upper = mid;
        } else {
            lower = mid;
        }
        iteration++;
    }

    // Convertir el ángulo obtenido a grados y mostrarlo
    const angleDeg: number = (mid * 180) / Math.PI;
    resultDisplay.textContent = `ANGLE : ${angleDeg.toFixed(2)}°`;
}
