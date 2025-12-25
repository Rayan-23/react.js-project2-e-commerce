import { useState } from "react";
import { productList } from "./components/Data";
import ProductCard from "./components/ProductCard";
import Modal from "./utils/Modal";
import Button from "./components/UI/Button";

const App = () => {
   const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
 
  function openModal() {
    setIsOpen(true);
  }


   const RanderProductList=productList.map(product=> <ProductCard product={product}  key={product.id} />  )
  return <main className="container mx-auto">
    <div className="flex justify-end me-5">
          <Button textBtn="add product" className="bg-indigo-700 " width="w-fit"  onClick={openModal} />

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-2 rounded-md gap-2 p-2">
      {RanderProductList}
      
 
    </div>
    <Modal isOpen={isOpen} closeModal={closeModal}  title="add prodect" />
    
      
   
      

    
      
   
      
   

  </main>;
};
export default App;
