import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ExerciseList from "./components/exercise-list";
import EditExercise from "./components/edit-exercise";
import {CreateExercise } from "./components/create-exercise.js";
import CreateUser from "./components/create-user.js";
import Navbar from "./components/navbar";


function App() {

  return (

    <Router>
      <div className="container mx-5">
      <Navbar />
      <br/>
      <Switch>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
