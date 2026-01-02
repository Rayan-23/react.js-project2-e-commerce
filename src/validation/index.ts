export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
  // color: string[];
}) => {
  const Error: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
    // color: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    // color: "",
  };

  const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
    Error.title = "Product title must be between 10 and 80 characters!";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 600
  ) {
    Error.description = "Product description must be between 10 and 900 characters!";
  }
  if (!product.imageURL.trim() || !validURL) {
    Error.imageURL = "Valid image URL is required";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    Error.price = "Valid price is required";
  }
  // if (product.color.length >= 1) {
  //   Error.color = "Valid color is required";
  // }

  return Error;
};
