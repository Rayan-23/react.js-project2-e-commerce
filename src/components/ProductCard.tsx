import { useState } from "react";
import { rextSlicer } from "../utils/fun";
import CircelColor from "./CircelColor";
import type { IProduct } from "./interface/interface";
import Button from "./UI/Button";
import Images from "./UI/Images";


interface IProps{
  
  product:IProduct
}

const ProductCard = (props:IProps) => {
  const [tempColor, setTempColor] = useState<string[]>([]);
  const RanderProductColor = props.product.color.map((color) => (
    <CircelColor
      key={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev)=>prev.filter(item=>item !==color))
          return
         
        }

        setTempColor((prev) => [...prev, color]);
      }}
      color={color}
    />
  ));
  return (
    <div className=" rounded-md p-3 m-5 flex flex-col border max-w-sm md:max-w-lg   mx-auto md:mx-0">
      
      <Images ImageURL={props.product.imageURL} alt="product-name" className="rounded-md  w-full h-full object-contain "/>
      <h2  className="text-lg font-bold py-1">{props.product.title}</h2>
      <p className="text-gray-500 mt-3 text-xs">
        {rextSlicer(props.product.description)}
      </p>
                <div className="flex space-x-2 my-2 items-center  flex-wrap">{RanderProductColor}</div>

      {/* <div className="flex space-x-2 my-3">
        <p  className="w-6 h-6 bg-indigo-700 rounded-full cursor-pointer"></p>
        <p  className="w-6 h-6 bg-yellow-600 rounded-full cursor-pointer"></p>
        <p  className="w-6 h-6 bg-red-900 rounded-full cursor-pointer"></p>
               
      </div> */}
      <div className="flex items-center justify-between ">
        <span>{props.product.price}</span>
      <Images ImageURL={props.product.category.imageURL} alt={props.product.category.name} className="w-10 h-10 rounded-full object-contain"/>

      </div>
      <div className="flex  space-x-2 justify-between items-center">
        <Button className="bg-indigo-700 " textBtn="Edit" width="w-full" />
        <Button className="bg-red-700 " textBtn="Delete" width="w-full" />
      </div>
    </div>
  );
};
export default ProductCard;
