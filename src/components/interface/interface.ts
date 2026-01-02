export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  color: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  label: string;
  name: IProductName;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
}

export type IProductName = "title" | "description" | "imageURL" | "price";
