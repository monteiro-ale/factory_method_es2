import { Furadeira } from "./furadeira";
import { Lixadeira } from "./lixadeira";

const furadeira1 = new Furadeira('Makita A4560');
furadeira1.cadastrarFerramenta('Alexandre');
furadeira1.apagarFerramenta();

const lixadeira1 = new Lixadeira('DeWalt Circular 380');