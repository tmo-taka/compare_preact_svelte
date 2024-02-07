import './app.css'
import { useState } from 'preact/hooks';
import { TestN1 } from "./components/TestN1"
export function App() {
  const [value, setValue] = useState('');
  const updateValue = (event) => {
    setValue(event.target.value);
  }
  return (
    <>
      <main>
        <h1>Vite + Preact</h1>
        <input type="text" value={value} onInput={updateValue}/>
        <div>
          <TestN1 value={value} />
        </div>
      </main>
    </>
  )
}
