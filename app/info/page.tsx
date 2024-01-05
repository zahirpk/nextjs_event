
"use client"
import { buttonProps } from "@/component/types/buttonProps"
export default function Event() {
  const onHandleClick=()=>{
    alert("Working with simple TS event")
  }
  return (
    <div>
    <div className="flex justify-center p-5 text-red-700 text-4xl">Working with "TS" Events</div> 
    <button className="flex justify-center p-5 text-4xl bg-slate-300 hover:bg-slate-500 hover:text-white" onClick={onHandleClick}>Submit</button>
    </div>

  )
}