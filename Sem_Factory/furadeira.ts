import { Ferramenta } from "./ferramenta";

export class Furadeira implements Ferramenta{
    constructor(private name: string){}

    cadastrarFerramenta(nomeUsuario: string): void{
        console.log('O funcionário '+ nomeUsuario +' cadastrou a furadeira '+this.name)
    };
    apagarFerramenta(): void{
        console.log('A furadeira '+this.name+' foi apagada')
    };
}