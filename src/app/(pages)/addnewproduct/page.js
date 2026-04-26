import Form from "next/form";

const createProduct = async (formData) => {
  "use server";
  console.log(formData.get("productname"));
};

const addNewProduct = () => {
  return (
    <Form action={createProduct}>
      <input name="productname" />
      <button type="submit">Create product</button>
    </Form>
  );
};

export default addNewProduct;
