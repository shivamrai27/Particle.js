
import './App.css'
import ParticlesBackground from './ParticlesBackground'
import ParticleBg from './components/ParticleBg'
import styled from 'styled-components'

function App() {


  return (

    // <ParticlesBackground />

    <div className='main'>
      <img src="https://cdn.pixabay.com/photo/2021/06/04/19/32/god-6310748_1280.jpg" />
      <ParticleBg className="part" />
    </div>

  )
}

export default App
