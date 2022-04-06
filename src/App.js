import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";
function App() {
  
  const [arrays , addArray] = useState([])



  const addNote = (data) =>{


    addArray((preval)=>{

      return[...preval,data]
    })

      console.log(arrays)
   


  }
  

  const remove = (id)=>{
    console.log(id);
addArray((olddata)=>
    olddata.filter((currentval,index)=>{


      return index!==id;



    })

    )

  }
  
  
  return (
<>
   



    <div className="App">
    <Header></Header>
    
    <Createnote passNote={addNote}></Createnote>

     <div className="container2"> 
  {

    arrays.map((currentval,index) =>{

        return(
      
      <Note key={index} id={index}  title={currentval.title} value={currentval.value} onDelete={remove}></Note>
      )

    })
  }
   
 

    </div>
    <Footer></Footer>
    </div>
    </>
    );

}

export default App;
