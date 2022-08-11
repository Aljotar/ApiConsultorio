const { check } = require('express-validator')


const validateCreate = [
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
    check('apellido')
        .exists()
        .not()
        .isEmpty(),
    check('edad')
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