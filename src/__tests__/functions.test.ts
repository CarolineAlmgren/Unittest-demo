import { addTodo } from "../ts/functions";
import { Todo } from "../ts/models/todo";

describe("Add todos", ()=> {
    test("It should add todos if Todo is longer than 2 characters", () =>{ 

       const todos: Todo[] = []
       const result = addTodo("Example todo", todos)

        expect(result.success).toBe(true);
})
})


