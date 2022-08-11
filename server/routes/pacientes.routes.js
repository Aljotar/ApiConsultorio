import  express  from 'express';
import { Router } from "express";

import {createNewPaciente, deletePacienteBydni, getPacienteByDni, getPacientes, updatePacienteBydni} from '../controllers/pacientes.controller.js'

import { check } from 'express-validator'

const router = Router();

router.get('/pacientes', getPacientes)

router.post('/pacientes', 
[
    check('nombre', 'El nombre es obligatorio')
        .exists()
        .not()
        .isEmpty(),
    check('apellido', 'El apellido es obligatorio')
        .exists()
        .not()
        .isEmpty(),
    check('edad')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('dni','El dni es obligatorio')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('telefono')
        .not()
        .isEmpty()
        .isNumeric(),
    check('email')
        .not()
        .isEmpty()
        .isEmail()
]
, createNewPaciente)

router.get('/pacientes/:dni', getPacienteByDni)

router.delete('/pacientes/:dni', deletePacienteBydni)

router.put('/pacientes',
[
    check('nombre', 'El nombre es obligatorio')
        .exists()
        .not()
        .isEmpty(),
    check('apellido', 'El apellido es obligatorio')
        .exists()
        .not()
        .isEmpty(),
    check('edad')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('dni','El dni es obligatorio')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('telefono')
        .not()
        .isEmpty()
        .isNumeric(),
    check('email')
        .not()
        .isEmpty()
        .isEmail()
] 
,updatePacienteBydni)



export default router