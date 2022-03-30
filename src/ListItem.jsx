import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ListItem = (props) => {
    const [line, setLine] = useState(false);

    const deleteItem = () => {
        setLine(true);
    }
    return (
        <div className="list-style">
            <span onClick={deleteItem} className="delspan"><DeleteIcon className="deleteIcon"/></span>
            <li style={{ textDecoration: line? 'line-through':'none'}}>{props.item}</li>
        </div>
    )
}

export default ListItem;