import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let count = 0


function App() {
  
  count++
  return (
    <div className= "App">
      count = {count}
      <button onClick={()=> {
        count++}}> "click me"</button>
   
   </div>
  );
 
}

console.log(App())
console.log(App())
console.log(App())

export default App;
