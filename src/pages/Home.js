import React,{useState} from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
// import Contact from './Contact'

export default function Home() {
  const fileChange = (event)=>{
    const file = event.target.files[0];
    console.log(file);
    fileApi(file);
  }

  const fileApi = async(file)=>{
    const formData = new FormData();
    formData.append('file',file);
    try{
      (await fetch('http://127.0.0.1:8000/emp',{
        method: 'post',
        body: formData
      }))
      .json().then((resp)=>{
        console.log(resp);
      }).catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <>
      <input
        type="file"
        className="file-input file-input-bordered file-input-info w-full max-w-xs m-auto"
        onChange={fileChange}
      />
    </>
  );
}
