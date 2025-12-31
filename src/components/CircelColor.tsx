import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement>{

    color:string
}
const CircelColor = ({color,...rest}: IProps) => {
  return <span {...rest} className="w-5 h-5 bg-indigo-700 rounded-full cursor-pointer"  style={{backgroundColor:color}}></span>;
};

export default CircelColor;
