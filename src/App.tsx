import './App.css';
import * as GenerateCsvFromPdf from './services/GenerateCsvFromPdf';


async function test(this: any, event: any) {
  console.log(event.target.files[0]);
  await GenerateCsvFromPdf.execute(event.target.files[0])
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <input type="file" accept="application/pdf" onChange={test}/>
      </header>
    </div>
  );
}

export default App;
