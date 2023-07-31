export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Name",
      type: "string",
    },
    {
      name: "description",
      title: "Product description",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
  ],
};
