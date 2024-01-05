"use client"
import Button from "@/component/button/button";
export default function functionAsProps2() {
    const onHandleClick=()=>{
        alert("Working with Onclik Event Using TS")
      }
  return (
    
    <div>
      <div className="flex justify-center p-5 text-red-700 text-4xl">
        Working with "onClick" Events
      </div>
      <Button title ="My Button" onHandleClick={onHandleClick}/>
    </div>
  );
}
