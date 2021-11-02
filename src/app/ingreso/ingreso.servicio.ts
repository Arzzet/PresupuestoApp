import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[] = [
        new Ingreso("Salario", 1200),
        new Ingreso("Venta de coche", 5300)
    ];

    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}