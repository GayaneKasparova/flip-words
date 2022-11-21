import './App.css';
import Text from "./Text/Text";

function App() {
    const text = "Hey there! Let's see this words flipped";

    return (
        <div className="App">
            <Text text={text}/>
        </div>
    );
}

export default App;
