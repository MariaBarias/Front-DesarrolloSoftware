import './App.css'
import foto from './assets/fotoLanding.png'

function App() {

  return (
    <>
      <div className='card'>
        <div className="left_card">
        <h1>PuduPay</h1>
        <h2>Divide y lleva la cuenta de gastos compartidos de la manera más fácil</h2>
          <button className='boton_empezar'>
            Empieza ahora
          </button>
        </div>
        <div className='right_card'>
          <img src={foto} className="foto" alt="Foto" />
        </div>
      </div>
    </>
  )
}

export default App
