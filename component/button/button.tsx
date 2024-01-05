"use client"
import { buttonProps } from "../types/buttonProps";
export default function Button(Props:buttonProps) {
  return (
    <div>
      <div>
        <button
          className="flex justify-center p-5 text-4xl bg-slate-300 hover:bg-slate-500 hover:text-white"
        onClick={Props.onHandleClick}>
          {Props.title}
        </button>
      </div>
    </div>
  );
}
