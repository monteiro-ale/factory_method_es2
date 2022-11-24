import { FuradeiraFactory } from "./factories/furadeira-factory";
import { LixadeiraFactory } from "./factories/lixadeira-factory";
import { Furadeira } from "./furadeira";
import { Lixadeira } from "./lixadeira";

// const furadeira1 = new Furadeira('Makita A4560');
// furadeira1.cadastrarFerramenta('Alexandre');
// furadeira1.apagarFerramenta();

// const lixadeira1 = new Lixadeira('DeWalt Circular 380');


const furadeiraFactory = new FuradeiraFactory();
const makita = furadeiraFactory.getFerramenta('Makita A4560')
makita.cadastrarFerramenta('Alexandre');
makita.apagarFerramenta();

const lixadeiraFactory = new LixadeiraFactory();
const deWalt = lixadeiraFactory.getFerramenta('DeWalt Circular 380');
deWalt.cadastrarFerramenta('Alexandre');
deWalt.apagarFerramenta();