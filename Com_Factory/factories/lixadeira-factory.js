"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LixadeiraFactory = void 0;
const lixadeira_1 = require("../lixadeira");
const ferramenta_factory_1 = require("./ferramenta-factory");
class LixadeiraFactory extends ferramenta_factory_1.FerramentaFactory {
    getFerramenta(ferramentaName) {
        return new lixadeira_1.Lixadeira(ferramentaName);
    }
}
exports.LixadeiraFactory = LixadeiraFactory;
