import { Ferramenta } from "../ferramenta";
import { Lixadeira } from "../lixadeira";
import { FerramentaFactory } from "./ferramenta-factory";

export class LixadeiraFactory extends FerramentaFactory{
    getFerramenta(ferramentaName: string): Ferramenta{
        return new Lixadeira(ferramentaName);
    }
}