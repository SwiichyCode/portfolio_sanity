// Purpose: Defines the schema for Sanity Studio.
import { type SchemaTypeDefinition } from "sanity";

import stack from "./schemas/stack";
import project from "./schemas/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [stack, project],
};
