"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FerramentaFactory = void 0;
class FerramentaFactory {
    cadastrarFerramenta(nomeFerramenta, nomeUsuario) {
        const ferramenta1 = this.getFerramenta(nomeFerramenta);
        ferramenta1.cadastrarFerramenta(nomeUsuario);
        return ferramenta1;
    }
}
exports.FerramentaFactory = FerramentaFactory;
