import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="terminal">
    <h1>SISTEMA EN LÍNEA</h1>
    <p><strong>[STATUS]:</strong> Infraestructura Vite + TS inicializada.</p>
    <p><strong>[HOST]:</strong> erikmartinez.vercel.app</p>
    <p><strong>[USER]:</strong> Erik Martínez | CTO TEZCOR</p>
    <p><strong>[TARGET]:</strong> CityU of Seattle & MITACS</p>
    <div class="blinking-cursor"></div>
  </div>
`

console.log("Arquitectura conectada. Búnker operando al 100%.");