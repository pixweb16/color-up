import Colorup from './Colorup';

function colorSpanClicked() {
  navigator.clipboard.writeText('Pixweb@protonmail.com');
  alert('Mail Adress copied !');
}

function App() {
  return (
    <div className="App">
      
      <Colorup/>
      
      <footer className='footer' onClick={colorSpanClicked}>
        <p>created by: Pixweb@protonmail.com</p>
      </footer>
    
    </div>
  );
}

export default App;
