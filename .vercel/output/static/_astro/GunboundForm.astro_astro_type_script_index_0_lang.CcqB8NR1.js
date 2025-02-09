const i=document.getElementById("numeroInput"),l=document.getElementById("direccionSelect"),p=document.getElementById("tablaContainer"),F={triko:{RIGHT:{"1SD":{values:{op1:[87,84,80,75,71,65,60,54,49,47,39,35,31,28,25,23,20,19,17,16],op2:[89,88,86,85,84,82,81,79,78,77,75,74,72,71,69,68,66,64,63,61],op3:[89,0,88,87,86,86,85,84,83,83,82,0,81,80,79,79,78,77,77,76]},SPIN:{"1SPIN":[1.8,1.75,1.69,1.65,1.6,1.6,1.6,1.68,1.7,1.8,1.9,2,2.2,2.38,2.56,2.75,2.95,3.16,3.37,3.58],"2SPIN":[2.78,2.77,2.76,2.75,2.74,2.73,2.72,2.72,2.71,2.7,2.7,2.72,2.72,2.73,2.74,2.75,2.77,2.76,2.8,2.8],"3SPIN":[3.73,3.73,3.73,3.8,3.74,3.74,3.85,3.82,3.75,3.74,0,3.75,3.75,3.8,3.76,3.76,3.75,3.8]}},"2SD":{values:{op1:[60,59,57,56,54,53,51,50,49,48,46,45,44,42,41,40,39,38,37,37],op2:[35,34,33,32],op3:[75,74,74,73,72,71,70,70,69,69,68,67,66,65,64,64,63,62,61,60]},SPIN:{"1SPIN":[2.85,2.88,2.9,2.94,2.9,3,3,3.1,3.1,3.2,3.2,3.27,3.33,3.38,3.44,3.5,3.56,3.6,3.6,3.7],"2SPIN":[3.8,3.9,3.98,4],"3SPIN":[3.78,3.76,3.8,3.79,3.8,3.8,3.75,3.81,3.9,3.85,3.8,3.86,3.86,3.87,3.88,3.91,3.9,3.9,3.94,3.95]}}},LEFT:{"1SD":{values:{op1:[88,86,84,82,80,78,76,73,71,69,66,64,62,59,57,55,52,50,47,45],op2:[89,88,87,86,85,84,83,82,82,81,80,79,78,77,76,75,74,73,72,71],op3:[0,0,0,0,87,0,86,0,85,0,84,0,83,0,82,81,0,80,0,79]},SPIN:{"2SPIN":[2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.26,2.28,2.3,2.24,2.38,2.4,2.47,2.5,2.5],"3SPIN":[3.26,3.26,3.26,3.25,3.2,3.2,3.2,3.2,3.28,3.25,3.2,3.26,3.26,3.27,3.27,3.28,3.3,3.3]}},"2SD":{values:{op1:[43,40,38,36,34,32,30,29,28,27,25,23],op2:[70,69,68,67,66,65,64,63,62,61,59,58,57,56,55,54,53,52,51,49],op3:[48,47,46,45,44,43,42,41]},SPIN:{"1SPIN":[2.66,2.7,2.8,2.9,3,3.1,3.1,3.1,3.2,3.4,3.6,3.8],"2SPIN":[3.3,3.3,3.3,3.34,3.36,3.37,3.39,3.4,3.4,3.4,3.46,3.48,3.5,3.53,3.56,3.59,3.62,3.65,3.68],"3SPIN":[3.7,3.76,3.8,3.84,3.88,3.93,3.98,3.4]}}}}};function S(o,d){const n=d<=20,r=n?"1SD":"2SD",t=n?d-1:d-21,e=F.triko[o][r];return{op1:e.values.op1?.[t]||"N/A",op2:e.values.op2?.[t]||"N/A",op3:e.values.op3?.[t]||"N/A",spin1:e.SPIN?.["1SPIN"]?.[t]?.toFixed(2)||"N/A",spin2:e.SPIN?.["2SPIN"]?.[t]?.toFixed(2)||"N/A",spin3:e.SPIN?.["3SPIN"]?.[t]?.toFixed(2)||"N/A"}}function s(){const o=parseInt(i.value),d=l.value;if(!o||o<1||o>40||!p)return;p.innerHTML="";const{op1:n,op2:r,op3:t,spin1:e,spin2:a,spin3:c}=S(d,o),x=`
            <table  border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;  background: linear-gradient(to bottom, #333, #111); 
        color: #FFD700; font-family: Arial, sans-serif; text-shadow: 1px 1px 2px black; border: 2px solid #FFD700;">
                <tr style="background: linear-gradient(to bottom, #555, #222); font-weight: bold; text-align: center; ">
                    <th style="border: 1px solid #FFD700; padding: 10px;">Opción</th>
                    <th style="border: 1px solid #FFD700; padding: 10px;">Angulo </th>
                    <th style="border: 1px solid #FFD700; padding: 10px;"> SPIN 1 </th>
                
                </tr>
                <tr style="text-align: center;" >
                    <td style="border: 1px solid #FFD700; padding: 8px;">Tiro 1</td>
                    <td style="border: 1px solid #FFD700; padding: 8px;">${n}</td>
                    <td style="border: 1px solid #FFD700; padding: 8px;">${e}</td>
                    
                </tr>
                <tr style="text-align: center;" >
                    <td style="border: 1px solid #FFD700; padding: 8px;">Tiro 2</td>
                    <td style="border: 1px solid #FFD700; padding: 8px;">${r}</td>
                    
                    <td style="border: 1px solid #FFD700; padding: 8px;">${a}</td>
                  
                </tr>
                <tr style="text-align: center;" >
                    <td style="border: 1px solid #FFD700; padding: 8px;">Tiro 3</td>
                    <td style="border: 1px solid #FFD700; padding: 8px;">${t}</td>
                    
                    <td style="border: 1px solid #FFD700; padding: 8px;">${c}</td>
                </tr>
            </table>
        `;p.innerHTML=x}i.addEventListener("input",s);l.addEventListener("change",s);
