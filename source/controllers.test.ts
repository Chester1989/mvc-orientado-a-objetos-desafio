import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.truthy(controller.contacts);
});

test("Testeo el método processOptions con action 'save' y luego 'get'", (t) => {
  const controller = new ContactsController();
  const fakeId = 9898;
  const newContact = { id:fakeId, name: "Alice" };
  const saveResult = controller.processOptions({ action: "save", params: newContact });
  t.true(saveResult);
  // console.log(controller.processOptions({ action: "get", params: null}))
  const getResult = controller.processOptions({ action: "get", params: { id: fakeId } });
  t.deepEqual(getResult, newContact);
});
