import './App.css';
import AnimalCard from '../AnimalCard/AnimalCard';
import animals from './data';

function App() {
  return (
    <div className="wrapper">
      {animals.map(animal =>
        <AnimalCard
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      )}
    </div>
  );
}

export default App;
