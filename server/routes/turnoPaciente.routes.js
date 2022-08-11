import { Router } from "express";
import { createNewTurno, getTurnoByDni, getTurnos, updateTurnoBydni } from "../controllers/turnos.controller.js";

const router = Router();

router.get('/turnos', getTurnos)

router.post('/turnos', createNewTurno)

router.get('/turnos/:dni', getTurnoByDni)

router.delete('/turnos/:dni', )

router.put('/turnos', updateTurnoBydni)



export default router