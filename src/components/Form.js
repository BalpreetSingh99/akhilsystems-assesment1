import { useState,useEffect } from "react";
import './index.css';

export default function Form() {
    let pathname = window.location.pathname;
    let item={};
    
    let [name,setName] = useState("");
    let [username,setUsername] = useState("");
    let [photo,setPhoto] = useState("");

    function setItem(item){
        item.name=name;
        item.username=username;
        item.photo=photo;
    }

    function changeData(e){
        setItem(item);
        console.log(e.target)
        if(e.target.id==="name"){
            setName(e.target.value);
            item.name=e.target.value
        }
        else if(e.target.id==="username"){
            setUsername(e.target.value);
            item.username=e.target.value
        }
        else if(e.target.id==="photo"){
            setPhoto(e.target.value);
            item.photo=e.target.value
        }
        localStorage.setItem('item', JSON.stringify(item));
    }

    
    useEffect(() => {
        if(pathname==="/admin"){
            setItem(item);
            localStorage.setItem('item', JSON.stringify(item));
        }
        else {
            let tempItem = JSON.parse(localStorage.getItem('item'));
            if(tempItem){
                setName(tempItem.name);
                setUsername(tempItem.username);
                setPhoto(tempItem.photo); 
            }
            
        }
    },[]);

    
    function handleStorage(){
        if(pathname==="/admin"){
            
        }
        else {
            let tempItem = JSON.parse(localStorage.getItem('item'));
            setName(tempItem.name);
            setUsername(tempItem.username);
            setPhoto(tempItem.photo);
        }
    }
    window.addEventListener('storage', handleStorage) 
    
    let divBoxStyle={
        display:"flex",alignItems: "center",padding:"50px",justifyContent:"center"
    }

    return (
      <div>
        <form style={{textAlign:"center"}}>
            <div style={divBoxStyle}>
                <p>Name</p>
                {pathname==="/admin"?<input type="text" id="name" value={name} onChange={(e)=>{changeData(e)}}></input>:<p>{name}</p>}
            </div>
            <div style={divBoxStyle}>
                <p>Username</p>
                {pathname==="/admin"?<input type="text" id="username" value={username} onChange={(e)=>{changeData(e)}}></input>:<p>{username}</p>}
            </div>
            <div style={divBoxStyle}>
                <p>{pathname==="/admin"?"Photo URL":"Photo"}</p>
                {pathname==="/admin"?<input type="text" id="photo" value={photo} onChange={(e)=>{changeData(e)}}></input>:<img src={photo}/> }
            </div>
        </form> 
      </div>
    );
}