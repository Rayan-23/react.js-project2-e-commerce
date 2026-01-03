import { useState, type ChangeEvent, type FormEvent } from "react";
import { category, color, formInputList, productList } from "./components/Data";
import { v4 as uuid } from "uuid";
import ProductCard from "./components/ProductCard";
import Modal from "./utils/Modal";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import type { IProduct, IProductName } from "./components/interface/interface";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";
import CircelColor from "./components/CircelColor";
import Select from "./components/UI/Select";
import toast, { Toaster } from 'react-hot-toast';

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
  const [isOpenEditModal, setisOpenEditModal] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [error, setError] = useState({ title: "", description: "", imageURL: "", price: "" });
  const [selected, setSelected] = useState(category[0]);
  const [productTOEdit, setproductTOEdit] = useState<IProduct>(defaultProduct);
  const [productTOEditIdx, setproductTOEditIdx] = useState<number>(0);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  console.log(productTOEditIdx);
  console.log(tempColor);
  //  HANDER-------------->
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setisOpenEditModal(false);
  const openEditModal = () => setisOpenEditModal(true);
  const closeConfirmModal = () => setIsConfirmOpen(false);
  const openConfirmModal = () => setIsConfirmOpen(true);
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      // color,
    });
    const hasErrorMsg =
      Object.values(errors).some((valu) => valu == "") &&
      Object.values(errors).every((valu) => valu == "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setError(errors);
      return;
    }
    setProducts((prev) => [
      { ...product, color: tempColor, id: uuid(), category: selected },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColor([]);
    closeModal();


     toast("Product has been added successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "#4338CA",
        color: "white",
      },
    });
  };
  // submitEditHandler ------------------------------------------------------------------------
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = productTOEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      // color,
    });
    const hasErrorMsg =
      Object.values(errors).some((valu) => valu == "") &&
      Object.values(errors).every((valu) => valu == "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setError(errors);
      return;
    }
    const updataProductEdit = [...products];
    updataProductEdit[productTOEditIdx] = {
      ...productTOEdit,
      color: tempColor.concat(productTOEdit.color),
    };
    setProducts(updataProductEdit);
    setproductTOEdit(defaultProduct);
    setTempColor([]);
    closeEditModal();




     toast("Product has been Edit successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "#4338CA",
        color: "white",
      },
    });














  };
  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };



    const removeProductHandler = () => {
    const filtered = products.filter(product => product.id !== productTOEdit.id);
    setProducts(filtered);
    closeConfirmModal();
     toast("Product has been deleted successfully!", {
      icon: "👏",
      style: {
        backgroundColor: "#c2344d",
        color: "white",
      },
    });



 
    
  };














  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setproductTOEdit({ ...productTOEdit, [name]: value });
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
  const RanderProductList = products.map((product, idx) => (
    <ProductCard
      product={product}
      key={product.id}
      setproductTOEdit={setproductTOEdit}
      openEditModal={openEditModal}
      idx={idx}
      setproductTOEditIdx={setproductTOEditIdx}
      openConfirmModal={openConfirmModal}
    />
  ));
  const RanderProductEditWithError = (id: string, label: string, name: IProductName) => {
    return (
      <div className="flex flex-col">
        <label className="mb-[1px] text-sm font-medium text-gray-700" htmlFor={id}>
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productTOEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMsg massage={error[name]} />
      </div>
    );
  };
  const RanderProductColor = color.map((color) => (
    <CircelColor
      key={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (tempColor.concat(productTOEdit.color).includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
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
      {/* add product  modal ----------------------------------------------*/}
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="add prodect"
        // randerformInputList={randerformInputList}
      >
        <form className=" space-y-3" onSubmit={submitHandler}>
          {randerformInputList}
          <Select selected={selected} setSelected={setSelected} />
          <div className="flex space-x-2 my-2 items-center  flex-wrap">{RanderProductColor}</div>
          {/* <ErrorMsg massage={error.color} /> */}
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
      {/*  Edit product modal ---------------------------------------------------------*/}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="Edit prodect"
        // randerformInputList={randerformInputList}
      >
        <form className=" space-y-3" onSubmit={submitEditHandler}>
          {RanderProductEditWithError("title", "title", "title")}
          {RanderProductEditWithError("description", "product description", "description")}
          {RanderProductEditWithError("imageURL", "product imageURL", "imageURL")}
          {RanderProductEditWithError("price", "product price ", "price")}
          <Select
            selected={productTOEdit.category}
            setSelected={(value) => setproductTOEdit({ ...productTOEdit, category: value })}
          />
          <div className="flex space-x-2 my-2 items-center  flex-wrap">{RanderProductColor}</div>
          {/* <ErrorMsg massage={error.color} /> */}
          <br />
          <div className="grid grid-cols-5 gap-1 my-2 justify-center">
            {tempColor.concat(productTOEdit.color).map((color) => (
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




      {/* remove item in modal */}
      <Modal
        isOpen={isConfirmOpen}
        closeModal={closeConfirmModal}
        title="Are you sure you want to remove this Product from your Store?"
       description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action.">
      
      
         <div className="mt-4 flex space-x-3">
            <Button textBtn="Yes ,Remove" className="bg-[#c2344d] hover:bg-red-800" onClick={removeProductHandler} />
            <Button textBtn="cancel"  className="bg-[#f5f5fa] hover:bg-gray-300 !text-black" onClick={closeConfirmModal} />
          </div>
      </Modal>

      <Toaster/>
    </main>
  );
};
export default App;
