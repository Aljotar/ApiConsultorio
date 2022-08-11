import { getConnection } from '../database/db.js'
import { sql } from '../database/db.js'

export const getPacientes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Paciente')
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getPacienteByDni = async (req, res) => {
    const { dni } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('dni', sql.VarChar, dni)
        .query('SELECT * FROM Paciente WHERE dni = @dni');
    res.send(result)
    console.log(result)

}


export const createNewPaciente = async (req, res) => {
    const { nombre, apellido, edad, dni, telefono, email } = req.body
    try {
        const pool = await getConnection();

        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('apellido', sql.VarChar, apellido)
            .input('edad', sql.Int, edad)
            .input('dni', sql.VarChar, dni)
            .input('telefono', sql.VarChar, telefono)
            .input('email', sql.VarChar, email)
            .execute(`Alta_Paciente`);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

};

export const deletePacienteBydni = async (req, res) => {
    const { dni } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('dni', sql.VarChar, dni)
        .query('DELETE FROM Paciente WHERE dni = @dni');
    res.send(result)
    console.log(result)

}

export const updatePacienteBydni = async (req, res) => {
    const { nombre, apellido, edad, dni, telefono, email } = req.body

    try {
        const pool = await getConnection();

        const auxId = 0

        await pool.request()
            .input('idPaciente', sql.Int, auxId)
            .input('nombre', sql.VarChar, nombre)
            .input('apellido', sql.VarChar, apellido)
            .input('edad', sql.Int, edad)
            .input('dni', sql.VarChar, dni)
            .input('telefono', sql.VarChar, telefono)
            .input('email', sql.VarChar, email)
            .execute(`UPD_Paciente`);
            res.json({auxId,nombre, apellido, edad, dni, telefono, email})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}