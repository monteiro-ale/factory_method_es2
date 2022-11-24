"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const furadeira_factory_1 = require("./factories/furadeira-factory");
const lixadeira_factory_1 = require("./factories/lixadeira-factory");
// const furadeira1 = new Furadeira('Makita A4560');
// furadeira1.cadastrarFerramenta('Alexandre');
// furadeira1.apagarFerramenta();
// const lixadeira1 = new Lixadeira('DeWalt Circular 380');
const furadeiraFactory = new furadeira_factory_1.FuradeiraFactory();
const makita = furadeiraFactory.getFerramenta('Makita A4560');
makita.cadastrarFerramenta('Alexandre');
makita.apagarFerramenta();
const lixadeiraFactory = new lixadeira_factory_1.LixadeiraFactory();
const deWalt = lixadeiraFactory.getFerramenta('DeWalt Circular 380');
deWalt.cadastrarFerramenta('Alexandre');
deWalt.apagarFerramenta();
