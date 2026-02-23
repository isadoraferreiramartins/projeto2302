import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Consultaendereco from './COMPONENTES/Consultaendereco'
import APIexecRaposa from './COMPONENTES/APIexecRaposa'
import APIexec1 from './COMPONENTES/APIexec1'
import Combustivel from './COMPONENTES/Combustivel'

function App() {
  return (
    <div>
      <Consultaendereco />
      <APIexecRaposa />
      <APIexec1 />
      <Combustivel />
    </div>
  )
}

export default App
