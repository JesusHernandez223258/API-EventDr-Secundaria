import { query } from "../../../db/db";
import { Registration } from "../../domain/entidad/Registro";
import { RegistrationRepository } from "../../domain/interfaz/RegistroRepository";

export class MySqlRegistryRepository implements RegistrationRepository {
    async createRegistry(id_venta: number ): Promise<Registration | null> {
        console.log("Log de prueba para los parametros", id_venta);
        
    const sql = "INSERT INTO registrations (id_venta) VALUES (?)";
    const params: any []= [id_venta];
    try {
        console.log("log en el repo sql",params);
        const result: any = await query(sql, params);
        console.log("log2 en el repo sql",result);
        return new Registration(id_venta);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}