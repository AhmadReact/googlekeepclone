import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Note = (props) =>{

const deletefun = () => {

   
props.onDelete(props.id)



}



return(<>

<div className="note">
    
<form>
<input className="noteinput" type="text" value={props.title}  disabled/>
<textarea rows="5" className="notetextarea" column="" value={props.value}  placeholder="Write a note" spellCheck="false" disabled>
</textarea>
<button type="button" onClick={deletefun} ><DeleteIcon sx={{ fontSize: 8 }}></DeleteIcon></button>

</form>


</div>



</>)



}


export default Note;