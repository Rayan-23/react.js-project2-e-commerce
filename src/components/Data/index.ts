import type { ICategory, IFormInput, IProduct } from "../interface/interface";

import { v4 as uuid } from "uuid";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "adidas Cloudfoam Comfy mens ",
    description: "Regular fit Elastic lace closure Textile and synthetic upper",
    imageURL: "https://m.media-amazon.com/images/I/81ypaVyBE2L._AC_SY575_.jpg",
    price: "2000",
    color: ["", ""],
    category: {
      name: "Shoes",
      imageURL: "https://m.media-amazon.com/images/I/41TIXYu8wdL._AC_SX575_.jpg",
    },
  },
  {
    id: uuid(),
    title: "Athletic Sneakers",
    description:
      "Athletic Sneakers, Black Mesh Knit, Slip-On Walking Shoes, Lightweight Casual Sport Sneakers with Rubber Sole, Unisex Adult",
    imageURL: "https://m.media-amazon.com/images/I/41YKD-8y+7L._AC_SX575_.jpg",
    price: "4500",
    color: ["", ""],
    category: {
      name: "Shoes",
      imageURL: "https://m.media-amazon.com/images/I/41TIXYu8wdL._AC_SX575_.jpg",
    },
  },
  {
    id: uuid(),
    title: "slipper",
    description: "Shib Square, slipper, unisex-adult, Slipper",
    imageURL: "https://m.media-amazon.com/images/I/71UBYN0ZZ0L._AC_SX575_.jpg",
    price: "1900",
    color: ["", ""],
    category: {
      name: "Shoes",
      imageURL: "https://m.media-amazon.com/images/I/41TIXYu8wdL._AC_SX575_.jpg",
    },
  },
  {
    id: uuid(),
    title: "Athletic Running Shoes",
    description:
      "Athletic Running Shoes, Black Mesh, Performance Sports Sneakers with Reflective Design, Textured Rubber Sole",
    imageURL: "https://m.media-amazon.com/images/I/51ADuH5GMZL._AC_SX575_.jpg",
    price: "1900",
    color: ["", ""],
    category: {
      name: "Shoes",
      imageURL: "https://m.media-amazon.com/images/I/41TIXYu8wdL._AC_SX575_.jpg",
    },
  },
  {
    id: uuid(),
    title: "Oversize Fit Streetwear T-Shirt",
    description:
      "Oversize Fit Streetwear T-Shirt – “Midnight” – Graphic Printed, 100% Cotton, Unisex – Black",
    imageURL: "https://m.media-amazon.com/images/I/61R-8LXkE7L._AC_SX569_.jpg",
    price: "1900",
    color: ["", ""],
    category: {
      name: "T-Shirt",
      imageURL: "https://m.media-amazon.com/images/I/61R-8LXkE7L._AC_SX569_.jpg",
    },
  },
  {
    id: uuid(),
    title: "Oversize Fit Streetwear T-Shirt",
    description:
      "Oversize Fit Streetwear T-Shirt – “It’s What We Are” – Graphic Printed, 100% Cotton, Unisex – Petrol Green",
    imageURL: "https://m.media-amazon.com/images/I/71wGIBeZ6lL._AC_SX425_.jpg",
    price: "1900",
    color: ["", ""],
    category: {
      name: "T-Shirt",
      imageURL: "https://m.media-amazon.com/images/I/61R-8LXkE7L._AC_SX569_.jpg",
    },
  },
];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    label: "title",
    name: "title",
    type: "text",
  },
  {
    id: "description",
    label: " product description",
    name: "description",
    type: "text",
  },
  {
    id: "imageURL",
    label: " product imageURl",
    name: "imageURL",
    type: "text",
  },
  {
    id: "price",
    label: " product price",
    name: "price",
    type: "text",
  },
];

export const category: ICategory[] = [
  {
    id: uuid(),
    name: "Under Armour",
    imageURL: "https://m.media-amazon.com/images/I/51u-Yu3sljL._AC_SY575_.jpg",
  },
  {
    id: uuid(),
    name: "Asics",
    imageURL: "https://m.media-amazon.com/images/I/61V6YNkQuHL._AC_SX575_.jpg",
  },
  {
    id: uuid(),
    name: "Skechers",
    imageURL: "https://m.media-amazon.com/images/I/81gF7jroEWL._AC_SX575_.jpg",
  },
  {
    id: uuid(),
    name: "Vans",
    imageURL: "https://m.media-amazon.com/images/I/71FfND3gDRL._AC_SY575_.jpg",
  },
  {
    id: uuid(),
    name: "Converse",
    imageURL: "https://m.media-amazon.com/images/I/61dquJCTV8L._AC_SY575_.jpg",
  },
  {
    id: uuid(),
    name: "New Balance",
    imageURL: "https://m.media-amazon.com/images/I/61m7fnIF6mL._AC_SY575_.jpg",
  },
  {
    id: uuid(),
    name: "Uniqlo",
    imageURL: "https://m.media-amazon.com/images/I/71pR46NgCLL._AC_SY741_.jpg",
  },
  {
    id: uuid(),
    name: "H&M",
    imageURL: "https://m.media-amazon.com/images/I/61pl6mIQV2L._AC_SY550_.jpg",
  },
  {
    id: uuid(),
    name: "Zara",
    imageURL: "https://m.media-amazon.com/images/I/71tXRFDV1GL._AC_SX679_.jpg",
  },
  {
    id: uuid(),
    name: "Adidas",
    imageURL: "https://m.media-amazon.com/images/I/71-2ljhyWiL._AC_SX679_.jpg",
  },
  {
    id: uuid(),
    name: "Nike",
    imageURL: "https://m.media-amazon.com/images/I/519hI7z+0dL._AC_SY550_.jpg",
  },
];

export const color: string[] = [];

function getRandomHexColor(): string {
  // توليد رقم عشوائي من 0 لـ 16777215 (FFFFFF بالهكس)
  const randomNum = Math.floor(Math.random() * 16777216);
  // تحويل الرقم لهكس واضافة #
  return `#${randomNum.toString(16).padStart(6, "0")}`;
}

// على سبيل المثال عايزين 10 ألوان عشوائية
for (let i = 0; i < 10; i++) {
  color.push(getRandomHexColor());
}

console.log(color);
