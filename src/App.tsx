import "./App.css";
import GenerateWords from "./components/GenerateWords";
import Timer from "./components/Timer";
import Time from "./components/Time";

function App() {
  const keyHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.code);
  };
  return (
    <div tabIndex={0} onKeyDown={keyHandler}>
      <Time />

      <GenerateWords />
    </div>
  );
}

export default App;
