import { getConnection } from '../database/db.js'
import { sql } from '../database/db.js'

export const getTurnos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(`	SELECT * FROM Paciente P
        INNER JOIN TurnoPaciente T
        ON P.idPaciente = T.idPaciente
        INNER JOIN Turno L
        ON L.idTurno = T.idTurno`)
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getTurnoByDni = async (req, res) => {
    const { dni } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('dni', sql.VarChar, dni)
        .execute(`Busqueda_Turno`);
    res.send(result)
    console.log(result)

}

export const createNewTurno = async (req, res) => {
    const { dni, apellido, nombre, email, telefono, fechaTurno, estado, observacion, idMedico  } = req.body
    try {
        const pool = await getConnection();

        await pool.request()
            .input('dni', sql.VarChar, dni)
            .input('apellido', sql.VarChar, apellido)
            .input('nombre', sql.VarChar, nombre)
            .input('email', sql.VarChar, email)
            .input('telefono', sql.VarChar, telefono)
            .input('fechaTurno', sql.Char, fechaTurno)
            .input('estado', sql.SmallInt, estado)
            .input('observacion', sql.VarChar, observacion)
            .input('idMedico', sql.Int, idMedico)
            .execute(`createTurno`);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const updateTurnoBydni = async (req, res) => {
    const { dni, estado, observacion } = req.body

    try {
        const pool = await getConnection();

        await pool.request()
            .input('dni', sql.Int, dni)
            .input('estado', sql.TinyInt, estado)
            .input('observacion', sql.VarChar, observacion)
            .execute(`UPD_Turno`);
            res.json({dni,estado, observacion})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}