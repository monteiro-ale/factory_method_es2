import { Ferramenta } from "../ferramenta";

export abstract class FerramentaFactory{
    //Factory Method
    abstract getFerramenta(ferramentaName: string): Ferramenta;

    cadastrarFerramenta(nomeFerramenta: string, nomeUsuario: string): Ferramenta{
        const ferramenta1 = this.getFerramenta(nomeFerramenta);
        ferramenta1.cadastrarFerramenta(nomeUsuario);
        return ferramenta1;
    }
}