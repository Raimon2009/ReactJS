import './App.scss';
import Message from './Message';

function App(props) {

    return (
        <div>
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
                style={{ top: props.topPosition || '10px' }}>
                Hello!
                <h3>MyName is {props.myName}</h3>
                <Message user={props.myText} />

            </header>
        </div>
    );
}

export default App;
