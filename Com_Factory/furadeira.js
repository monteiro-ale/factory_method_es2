"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Furadeira = void 0;
class Furadeira {
    constructor(name) {
        this.name = name;
    }
    cadastrarFerramenta(nomeUsuario) {
        console.log('O funcionário ' + nomeUsuario + ' cadastrou a furadeira ' + this.name);
    }
    ;
    apagarFerramenta() {
        console.log('A furadeira ' + this.name + ' foi apagada');
    }
    ;
}
exports.Furadeira = Furadeira;
