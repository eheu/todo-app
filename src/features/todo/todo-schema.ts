import normalize, { ModelSchema } from "normalized-reducer";

const todo = "todo";
const list = "list";
const tag = "tag";

const todoSchema: ModelSchema = {
  list: {
    todoIds: { entity: todo, cardinality: "many", reciprocal: "listId" }
  },
  todo: {   
    listId: { entity: list, cardinality: "one", reciprocal: "todoIds" },
    tagIds: { entity: tag, cardinality: "many", reciprocal: "todoIds" }
  },
  tag: {
    todoIds: { entity: todo, cardinality: "many", reciprocal: "tagIds" }
  }
};

export const {
  reducer,
  actionCreators,
  actionTypes,
  emptyState,
  selectors,
  transformAction
} = normalize(todoSchema);
export const entities = { todo, list, tag };
