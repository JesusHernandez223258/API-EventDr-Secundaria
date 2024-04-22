import { Registration } from "../entidad/Registro";

export interface RegistrationRepository {
    createRegistry(
        id_venta: number,
    ): Promise<Registration | null>;
}