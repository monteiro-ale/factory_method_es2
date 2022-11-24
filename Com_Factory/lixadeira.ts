import { Ferramenta } from "./ferramenta";

export class Lixadeira implements Ferramenta{
    constructor(private name: string){}

    cadastrarFerramenta(nomeUsuario: string): void{
        console.log('O funcionário '+ nomeUsuario +' cadastrou a lixadeira '+this.name)
    };
    apagarFerramenta(): void{
        console.log('A lixadeira '+this.name+' foi apagada')
    };
}