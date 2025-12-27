import { useState, type ChangeEvent } from "react";
import { formInputList, productList } from "./components/Data";
import ProductCard from "./components/ProductCard";
import Modal from "./utils/Modal";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import type { IProduct } from "./components/interface/interface";
const App = () => {
  // STATE---------------->
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    color: [],
    category: {
      name: "",
      imageURL: "",
    },
  });

  //  HANDER-------------->
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };

  //  RANDER product------------->
  const randerformInputList = formInputList.map((input) => (
    <div className="flex flex-col">
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
    </div>
  ));
  const RanderProductList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
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
        randerformInputList={randerformInputList}
      />
    </main>
  );
};
export default App;
