const { check, validationResult } =  require ('express-validator');

const validarStore = [

    check('fecha').exists().not().isEmpty(),
    check('equipo1').exists().not().isEmpty(),
    check('equipo2').exists().not().isEmpty(),
    check('tipo_deporte').exists().not().isEmpty(),
    check('marcador_eq1').exists().not().isEmpty().isNumeric(),
    check('marcador_eq2').exists().not().isEmpty().isNumeric(),

    (req, res, next) => {
        let errors = validationResult(req); 
        
        if(!errors.isEmpty()) {
            console.log(errors.array());
            return res.json({ errors: errors.array ()});
        }

        return next();

    }
];

module.exports = { validarStore }