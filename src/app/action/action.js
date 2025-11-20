"use server";
export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productname = formData.get("productname");
  if (!productname || productname.length < 3) {
    error.productname = "Product name must be at least 3 characters long.";
  }
  return { error, productname };
};
