"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuradeiraFactory = void 0;
const furadeira_1 = require("../furadeira");
const ferramenta_factory_1 = require("./ferramenta-factory");
class FuradeiraFactory extends ferramenta_factory_1.FerramentaFactory {
    getFerramenta(ferramentaName) {
        return new furadeira_1.Furadeira(ferramentaName);
    }
}
exports.FuradeiraFactory = FuradeiraFactory;
