import { defineField, defineType } from "sanity";

export default defineType({
  name: "stack",
  title: "Stack",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
    }),
    defineField({
      name: "years",
      title: "Years of Experience",
      type: "number",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
    }),
    defineField({
      name: "visible",
      title: "Visible",
      type: "boolean",
    }),
  ],
});
