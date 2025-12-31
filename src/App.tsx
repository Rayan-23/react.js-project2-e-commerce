import { useState, type ChangeEvent, type FormEvent } from "react";
import { color, formInputList, productList } from "./components/Data";
import { v4 as uuid } from "uuid";

import ProductCard from "./components/ProductCard";
import Modal from "./utils/Modal";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import type { IProduct } from "./components/interface/interface";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";
import CircelColor from "./components/CircelColor";
const App = () => {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    color: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // STATE---------------->
  const [isOpen, setIsOpen] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [error, setError] = useState({ title: "", description: "", imageURL: "", price: "" });

  console.log(tempColor);
  //  HANDER-------------->
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((valu) => valu == "") &&
      Object.values(errors).every((valu) => valu == "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setError(errors);


      return;
    }


    setProducts((prev)=>[{...product,color:tempColor,id:uuid()},...prev])
    setProduct(defaultProduct)
    setTempColor([])
    closeModal();

  };

  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setError({ ...error, [name]: "" });
  };

  //  RANDER product------------->
  const randerformInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label className="mb-[1px] text-sm font-medium text-gray-700" htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMsg massage={error[input.name]} />
    </div>
  ));
  const RanderProductList = products.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  const RanderProductColor = color.map((color) => (
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
    <main className="container mx-auto">
      <div className="flex justify-end me-5">
        <Button
          textBtn="add product"
          className="bg-indigo-700 "
          width="w-fit"
          onClick={openModal}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-2 rounded-md gap-2 p-2">
        {RanderProductList}
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="add prodect"
        // randerformInputList={randerformInputList}
      >
        <form className=" space-y-3" onSubmit={submitHandler}>
          {randerformInputList}
          <div className="flex space-x-2 my-2 items-center  flex-wrap">{RanderProductColor}</div>
          <br />
          <div className="grid grid-cols-5 gap-1 my-2 justify-center">
            {tempColor.map((color) => (
              <span
                key={color}
                className="p-1 mr-2 mb-1 text-sm rounded-md text-center  "
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="mt-4 flex space-x-3">
            <Button textBtn="submit" className="bg-indigo-700 hover:bg-indigo-400" />
            <Button textBtn="cancel" className="bg-gray-600 hover:bg-gray-400" onClick={onCancel} />
          </div>
        </form>
      </Modal>
    </main>
  );
};
export default App;
