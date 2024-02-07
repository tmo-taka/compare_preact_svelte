import './app.css'
import { useState } from 'preact/hooks';
import { TestN1 } from "./components/TestN1"
import { TestD1 } from "./components/TestD1"
import { TestD2 } from "./components/TestD2"
import { TestD3 } from "./components/TestD3"
import { TestD4 } from "./components/TestD4"
import { TestD5 } from "./components/TestD5"
import { TestD6 } from "./components/TestD6"
import { TestD7 } from "./components/TestD7"
import { TestD8 } from "./components/TestD8"
import { TestD9 } from "./components/TestD9"
import { TestD10 } from "./components/TestD10"

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
        <div>
          <TestD1 />
          <TestD2 />
          <TestD3 />
          <TestD4 />
          <TestD5 />
          <TestD6 />
          <TestD7 />
          <TestD8 />
          <TestD9 />
          <TestD10 />
        </div>
      </main>
    </>
  )
}
