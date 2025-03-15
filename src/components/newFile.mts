import { selectedDataset, drawCircleWithPoints } from "./GraficaTurtle2.astro.0.mts";

document
    .getElementById("dataSelect")!
    .addEventListener("change", function () {
        selectedDataset = this.value;
        drawCircleWithPoints();
    });
