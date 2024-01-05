"use client"
import Button from "@/component/button/button"
import { buttonProps } from "@/component/types/buttonProps"
export default function FunctionAsProps() {
  const onHandleClick=()=>{
    alert("working with main page")
  }
  return (
    <div>
    <div className="flex justify-center p-5 text-red-700 text-4xl">Pass Function as a Props in TS </div> 
    <Button title="Submit" onHandleClick={onHandleClick}/>
 </div>

  )
}
