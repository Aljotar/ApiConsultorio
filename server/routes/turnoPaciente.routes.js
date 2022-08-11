import express from 'express';
import { Router } from "express";
import { createNewTurno, getTurnoByDni, getTurnos, updateTurnoBydni } from "../controllers/turnos.controller.js";

import { check } from 'express-validator'

const router = Router();

router.get('/turnos', getTurnos)

router.post('/turnos',
    [
        check('dni', 'El nombre es obligatorio')
            .exists()
            .not()
            .isEmpty()
            .isNumeric(),
        check('apellido', 'El apellido es obligatorio')
            .exists()
            .not()
            .isEmpty(),
        check('nombre')
            .exists()
            .not()
            .isEmpty(),
        check('email')
            .not()
            .isEmpty()
            .isEmail(),
        check('telefono')
            .not()
            .isEmpty()
            .isNumeric(),
        check('fechaTurno')
            .not()
            .isEmpty(),
        check('estado')
            .not()
            .isEmpty()
            .isNumeric(),
        check('observacion')
            .not()
            .isEmpty(),
        check('idMedico')
            .not()
            .isEmpty()
    ]
    , createNewTurno)

router.get('/turnos/:dni',
    [
        check('dni', 'El nombre es obligatorio')
            .exists()
            .not()
            .isEmpty()
            .isNumeric()
    ]
    , getTurnoByDni)

router.delete('/turnos/:dni',)

router.put('/turnos',
    [
        check('dni', 'El nombre es obligatorio')
            .exists()
            .not()
            .isEmpty()
            .isNumeric(),
        check('estado')
            .exists()
            .not()
            .isEmpty()
            .isNumeric(),
        check('observacion')
            .exists()
            .not()
            .isEmpty()
    ]
    , updateTurnoBydni)

export default router