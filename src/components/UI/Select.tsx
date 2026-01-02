"use client";

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { category } from "../Data";
import type { ICategory } from "../interface/interface";
interface IProps{
  selected:ICategory
  setSelected:(category:ICategory)=>void
}


const Select = (props:IProps) => {

  return (
    <Listbox value={props.selected} onChange={props.setSelected}>
      <Label className="mb-[1px] text-sm font-medium text-gray-700 ">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1  pr-2 pl-3 text-left text-black outline-1 -outline-offset-1 outline-white/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 sm:text-sm/6   focus:border-indigo-500 
      focus:outline-none focus:ring-1 focus:ring-indigo-500
       rounded-md px-2 py-2 text-md">
          <span className="border-gray-300 shadow-md col-start-1 row-start-1 flex items-center gap-3 
           p-3   ">
            <img
              alt=""
              src={props.selected.imageURL}
              className="size-5 shrink-0 rounded-full outline -outline-offset-1 outline-white/10 w-10 h-10 object-contain "
            />
            <span className="block truncate">{props.selected.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4 "
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="  border-[1px] border-gray-300 shadow-md focus:border-indigo-500 
      focus:outline-none focus:ring-1 focus:ring-indigo-500
       rounded-md px-2 py-2 text-md"
        >
          {category.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className="group relative cursor-default py-2 pr-9 pl-3  text-black select-none data-focus:bg-indigo-500 data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img
                  alt=""
                  src={ category.imageURL}
                  className="size-5 shrink-0 rounded-full outline -outline-offset-1 outline-white/10 w-10 h-10 object-contain "
                />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                  {category.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default Select;
