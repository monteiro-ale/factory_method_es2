import { Ferramenta } from "../ferramenta";
import { Furadeira } from "../furadeira";
import { FerramentaFactory } from "./ferramenta-factory";

export class FuradeiraFactory extends FerramentaFactory{
    getFerramenta(ferramentaName: string): Ferramenta{
        return new Furadeira(ferramentaName);
    }
}