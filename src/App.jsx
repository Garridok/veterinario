
import { useState, useEffect } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListadoPacientes from './Components/ListadoPacientes' 

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(()=>{
      const obtenerLS = () => {
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacientesLS)
      }

      obtenerLS();
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))

  },[pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizado = pacientes.filter( paciente => paciente.id !== id )
    setPacientes(pacientesActualizado)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header 
        
      />

      <div className='mt-12 md:flex'>
        <Formulario 
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
