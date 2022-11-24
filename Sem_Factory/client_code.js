"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const furadeira_1 = require("./furadeira");
const lixadeira_1 = require("./lixadeira");
const furadeira1 = new furadeira_1.Furadeira('Makita A4560');
furadeira1.cadastrarFerramenta('Alexandre');
furadeira1.apagarFerramenta();
const lixadeira1 = new lixadeira_1.Lixadeira('DeWalt Circular 380');
