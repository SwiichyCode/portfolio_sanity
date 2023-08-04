import { groq } from "next-sanity";

export const stackQuery = groq`*[_type == "stack" && visible == true] | order(order desc) {
    language, years, order, icon
  }`;

export const projectQuery = groq`*[_type == "project"] | order(date desc){
    title, description, stack[]->{
      language
    }, images, liveUrl, githubUrl, date
  }`;
