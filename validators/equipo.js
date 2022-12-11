const { check, validationResult } =  require ('express-validator');

const validarStore = [

    check('nombre').exists().not().isEmpty().withMessage('El nombre es requerido'),

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