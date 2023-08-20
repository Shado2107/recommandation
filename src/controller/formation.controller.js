const formationModel = require("../models/formation.model")


module.exports.getFormation = async(req, res) => {
    const formation = await formationModel.find({});
    res.status(200).json({success: true,  formations: formation});
}


module.exports.addFormation = async(req, res) => {
    try {
        const {name, difficulte, interet, pertinence } = req.body

         // Vérification si le nom de la ville existe déjà
        const existingFormation = await formationModel.findOne({ name });

        if (existingFormation) {
            return res.status(400).json({success:false, message: 'cette formation existe déjà.' });
        }

        // if(!name || !difficulte || !interet || !pertinence) {
        //     return res.status(400).json({sucess: false, message: "Veuillez remplir toutes les informations"});
        // }

            const newFormation = await new formationModel({
                name,
                difficulte,
                interet,
                pertinence
            });

            const savedFormation = await newFormation.save();

            res.status(201).json({success: true, message: 'Ajoutée avec succes', Formation: savedFormation});

    } catch(err){
        res.status(500).json({success: false, message: "Une erreur est survenue lors de l\'ajout de la formation", err})
    }

};
