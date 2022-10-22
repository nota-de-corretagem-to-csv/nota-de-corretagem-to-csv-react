import React from 'react';
import './App.css';
import * as GenerateCsvFromPdf from './services/GenerateCsvFromPdf';

const message = "Algo deu errado. Tente novamente em alguns minutos";

function App() {
  const [errorMessage, setErrorMessage] = React.useState("");

  async function handleOnChangeInputFile(event: any) {
    if (errorMessage !== '') {
      setErrorMessage('');
    }
    await GenerateCsvFromPdf.execute(event.target.files[0]).catch(() => setErrorMessage(message));
    event.target.value = null;
  }
  return (
    <div className="App">
      <header className="App-header">
        Adicione apenas um arquivo .pdf com cada nota de corretagem em uma página.
        <p>Se precisar juntar várias notas em uma arquivo, use um website como <a target='_blank' href='https://www.ilovepdf.com/merge_pdf' rel="noreferrer">ilovepdf.com</a></p>
        <input type="file" accept="application/pdf" onChange={handleOnChangeInputFile} />
        {errorMessage && <div className="App-error">{errorMessage}</div>}
      </header>
    </div>
  );
}

export default App;
