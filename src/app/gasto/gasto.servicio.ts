import { Gasto } from "./gasto.model";

export class GastoServicio{
    gastos:Gasto[] = [
        new Gasto("Alquiler", 650),
        new Gasto("PS5", 499)
    ];

    eliminar(gasto:Gasto){
        const indice: number = this.gastos.indexOf(gasto);
        this.gastos.splice(indice,1);
    }
}