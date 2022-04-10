import './App.scss';
import Router from './pages/Router';



function App(props) {
    return (
        <div className='App'>
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
                style={{ top: props.topPosition || '10px' }}>
                <Router />
            </header>
        </div>
    );
}

export default App;
