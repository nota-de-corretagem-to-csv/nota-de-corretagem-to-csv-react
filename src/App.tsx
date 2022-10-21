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
        Adicione apenas um arquivo .pdf com cada nota de corretagem em uma página.
        <p>Se precisar juntar várias notas em uma arquivo, use um website como <a target='_blank' href='https://www.ilovepdf.com/merge_pdf' rel="noreferrer">ilovepdf.com</a></p>
        <input type="file" accept="application/pdf" onChange={handleOnChangeInputFile}/>
      </header>
    </div>
  );
}

export default App;
