import image from './image.jpg';
import Animals from './Animals';
import './App.css';

const animalInfo = [{
  animalName: "Benson",
  animalAge: "10",
  animalType: "Monkey",
  },
  {
    animalName: "Mooshoo",
    animalAge: "4",
    animalType: "Leopard",
  },
  {
    animalName: "Lizzy",
    animalAge: "3",
    animalType: "Zebra",
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {image} width="500" length="500" />
        <h1>Meet the POA Zoo Family!</h1>
        {animalInfo.map(animal =>
          {const {animalName, animalAge, animalType} = animal;
          return (
        <Animals animalName={animalName} animalAge={animalAge} animalType={animalType}/>
        );
          })}
      </header>
    </div>
  );
}

export default App;
