import type { ButtonHTMLAttributes } from "react";

interface IProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
  textBtn: string;
  className?: string;
  width?: "w-full" | "w-fit";

}
const Button = ({ textBtn, className, width="w-full", ...rest }: IProps) => {
  return <>
          <button {...rest} className={` p-2  rounded-md mt-3 text-white   ${className} ${width}` } >{textBtn}</button>

  
  
  </>;
};
export default Button;



