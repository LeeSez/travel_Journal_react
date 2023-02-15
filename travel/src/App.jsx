import React from "react"
import data from "./data"
import Moment from "./components/Moment.jsx";
import Navbar from "./components/Navbar";

export default function App(){
  let stacks = data.map((info)=>{
    return (<Moment 
      key={info.id}
      info={info}
    />);
  });
  return(
    <div className="wrapper flexCol">
      <Navbar />
      {stacks}
    </div>
  );
}
