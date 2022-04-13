import { useContextActions } from "./hooks/useContextActions";
import {useContextState} from "./hooks/useContextState"

const randomString = () => Math.random().toString(36).slice(2);

const App = () => {

  const {changeText} = useContextActions(["changeText"])
  const state = useContextState(['text', "badSelector"]);


  const handleClick = () => {
    changeText(randomString())
  };

  console.log(state)
  
  return (
    <div className="App">
      <button onClick={handleClick}>Change to random text</button>
      <p>
        To check the contents of the state check console output
      </p>
    </div>
  );
}

export default App;
