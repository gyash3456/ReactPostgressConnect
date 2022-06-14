import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import{useState} from 'react';

function App() {
const [text,setText]=useState("");
function getData(){
axios.post("http://localhost:8080/", {crossdomain:true}).then(response=>{
  console.log(response);
setText(response.data.rows[5].email);
})
}
  return (
    <div>
      <button onClick={getData}>Click here</button>
      <div>{text}</div>
    </div>
  );
}

export default App;
