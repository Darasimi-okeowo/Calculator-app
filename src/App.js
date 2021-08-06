import React,{useState} from 'react';
import './App.css';

function App() {
  const [result,setResult] = useState('')

  const handleChange = (e) => {
    setResult(e.target.value)
  }
  console.log('res',result)
  return (
    <>
      <div className='container'>
        <form>
          <input onChange={handleChange} value={result} type='text' />
        </form>
      </div>
    </>
  );
}

export default App;
