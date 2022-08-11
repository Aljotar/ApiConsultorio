import { Router } from "express";

import {createNewPaciente, deletePacienteBydni, getPacienteByDni, getPacientes, updatePacienteBydni} from '../controllers/pacientes.controller.js'

const router = Router();

router.get('/pacientes', getPacientes)

router.post('/pacientes', createNewPaciente)

router.get('/pacientes/:dni', getPacienteByDni)

router.delete('/pacientes/:dni', deletePacienteBydni)

router.put('/pacientes', updatePacienteBydni)



export default router