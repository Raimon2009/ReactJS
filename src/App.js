import './App.scss';
import Router from './pages/Router';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './hooks/AuthProvaider';



function App(props) {
    return (
        <div className='App'>
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
                style={{ top: props.topPosition || '10px' }}>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </header>
        </div>
    );
}

export default App;
