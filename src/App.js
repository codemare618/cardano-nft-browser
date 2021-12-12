import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import NFTGallery from "./screens/NFTGallery";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NFTGallery
                    address={'addr_test1qpvn59ck46yzst4e0738hetzmc4478kguld8d8pvvll8gzkkfxufwnn7nvh230pkz0g0g8n6y432y7dyp4zl9hv25snq5hma33'}/>
            </header>
        </div>
    );
}

export default App;
