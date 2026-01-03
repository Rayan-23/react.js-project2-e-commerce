import { rextSlicer } from "../utils/fun";
import CircelColor from "./CircelColor";
import type { IProduct } from "./interface/interface";
import Button from "./UI/Button";
import Images from "./UI/Images";

interface IProps {
  product: IProduct;
  setproductTOEdit: (prodect: IProduct) => void;
  openEditModal: () => void;
  idx: number;
  setproductTOEditIdx: (value: number) => void;
  openConfirmModal: () => void;
}

const ProductCard = (props: IProps) => {
  //  HANDER-------------------------------------------------------------------->

  const onEdit = () => {
    props.setproductTOEdit(props.product);
    props.openEditModal();
    props.setproductTOEditIdx(props.idx);
  };
  const onRemove = () => {
    props.setproductTOEdit(props.product);
    props.openConfirmModal();
  };

  //  RANDER product---------------------------------------------------------------------------------->

  const RanderProductColor = props.product.color.map((color) => (
    <CircelColor key={color} color={color} />
  ));
  return (
    <div className=" rounded-md p-3 m-5 flex flex-col border max-w-sm md:max-w-lg   mx-auto md:mx-0">
      <Images
        ImageURL={props.product.imageURL}
        alt="product-name"
        className="rounded-md  w-full h-full object-contain "
      />
      <h2 className="text-lg font-bold py-1">{props.product.title}</h2>
      <p className="text-gray-500 mt-3 text-xs">{rextSlicer(props.product.description)}</p>
      <div className="flex space-x-2 my-2 items-center  flex-wrap">{RanderProductColor}</div>

      <div className="flex items-center justify-between ">
        <span>{props.product.price}</span>
        <Images
          ImageURL={props.product.category.imageURL}
          alt={props.product.category.name}
          className="w-10 h-10 rounded-full object-contain"
        />
      </div>
      <div className="flex  space-x-2 justify-between items-center">
        <Button className="bg-indigo-700 " textBtn="Edit" width="w-full" onClick={onEdit} />
        <Button className="bg-[#c2344d] hover:bg-red-800" textBtn="Delete" width="w-full" onClick={onRemove} />
      </div>
    </div>
  );
};
export default ProductCard;
