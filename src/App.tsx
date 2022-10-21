import './App.css';
import * as GenerateCsvFromPdf from './services/GenerateCsvFromPdf';


async function handleOnChangeInputFile(event: any) {
  await GenerateCsvFromPdf.execute(event.target.files[0])
  event.target.value = null;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <input type="file" accept="application/pdf" onChange={handleOnChangeInputFile}/>
      </header>
    </div>
  );
}

export default App;
