"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lixadeira = void 0;
class Lixadeira {
    constructor(name) {
        this.name = name;
    }
    cadastrarFerramenta(nomeUsuario) {
        console.log('O funcionário ' + nomeUsuario + ' cadastrou a lixadeira ' + this.name);
    }
    ;
    apagarFerramenta() {
        console.log('A lixadeira ' + this.name + ' foi apagada');
    }
    ;
}
exports.Lixadeira = Lixadeira;
