import { displayError } from "../ts/htmlFunctions";

describe("Testar diaplayerrorfunktionen", ()=>{
    test("diplayError", ()=>{
        document.body.innerHTML =
` 
        <div id="app">
          <form id="newTodoForm">
            <div>
              <input type="text" id="newTodoText" />
              <button>Skapa</button>
              <button type="button" id="clearTodos">Rensa lista</button>
            </div>
            <div id="error" class="error"></div>
          </form>
          <ul id="todos" class="todo"></ul>
        </div>
        `;

        displayError("Text", true)
        let error = document.getElementById("error") 
        expect(error?.innerHTML).toBe("Text")
        expect(error?.classList).toContain("show")
    })
})

describe("Testar ", ()=>{
  
})