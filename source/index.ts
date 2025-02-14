import { ContactsController, ContactsControllerOptions } from "./controllers";
import  minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const args = minimist(argv.slice(2)); // Omitimos 'node' y el script
  return {
    action: args.action || null,
    params: JSON.parse(args.params || null),
  };
}

function main() {
  const controller = new ContactsController();
  const options = parseaParams(process.argv);
  const result = controller.processOptions(options);
  console.log(result);
}

main();