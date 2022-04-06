import React, { useState } from "react";



const Createnote = (props) =>{
    const [expand , setexpand] = useState(false);


const [data,setdata]= useState({

title:"",
value:"",

})

const update = (event) =>{

const {name,value} =  event.target;
console.log(name)

setdata((preval)=>{

    return{

    ...preval,
    [name]:value


    }

})


}

const expandit = () =>{


setexpand(true);


}
const normal = () =>{


    setexpand(false);
    
    
    }

const addEvent = () => {


props.passNote(data);
setdata({

    title:"",
    value:"",
    
    })

}


return(

<>
<div className="container1" onDoubleClick={normal}>
<div className="main_note">
    
<form>
{expand?
<input type="text" onChange={update} name="title" value={data.title} placeholder="TITLE"/>
:null
}


<textarea rows="5"  column="" name="value"  placeholder="Write a note"  onClick={expandit} onChange={update} value={data.value} spellCheck="false">
</textarea>

{expand?<button type="button" onClick={addEvent}>+</button>
:null
}

</form>



</div></div>


</>

)



}

export default Createnote;