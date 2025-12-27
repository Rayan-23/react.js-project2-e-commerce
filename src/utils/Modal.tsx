import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "../components/UI/Button";
import { formInputList } from "../components/Data";
import Input from "../components/UI/Input";

interface IProps {
  title?: string;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = (prop: IProps) => {
  const randerformInputList = formInputList.map((input) => (
    <div className="flex flex-col">
      <label className="mb-[1px] text-sm font-medium text-gray-700" htmlFor={input.id}>{input.label}</label>
     
      <Input  type={input.type} id={input.id} name={input.name}  />
    </div>
  ));

  return (
    <>
      <Transition appear show={prop.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={prop.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {prop.title && (
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 text-center mb-5">
                      {prop.title}
                    </Dialog.Title>
                  )}

                  <div className=" space-y-3">
                    {randerformInputList}
                    <div className="mt-4 flex space-x-3">
                      <Button textBtn="submit" className="bg-indigo-700 hover:bg-indigo-400" />
                      <Button textBtn="cancel" className="bg-gray-600 hover:bg-gray-400" />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
