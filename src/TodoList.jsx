import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListItem from './ListItem';

const TodoList = () => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);

    const itemEvent = (e) => {
        setItem(e.target.value);
    }

    const addItem = () => {
        if(item === ''){
            alert("Please enter a task");
            return;
        }
        setItemList((prev) => {
            return [...prev,item];
        });
        setItem("");
    }
    return (
        <>
            <div className="main-div">
                <div className="center-div"> 
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add an item" onChange={itemEvent} value={item}/>
                    <Button className="newBtn" sx={ { borderRadius: '50%' }  } onClick={addItem}><AddIcon/></Button>
                    <br />
                        <ol>
                            {itemList.map((val,index)=>{
                               return <ListItem key={index} id={index} item={val}/>;
                            })}
                        </ol>
                    <br/>
                </div>
            </div>
        </>
    )
}

export default TodoList;