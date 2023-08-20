const userModel = require("../models/user.model")

module.exports.getUser = async(req, res) => {
    const user = await userModel.find({});
    res.status(200).json({success: true,  users: user});
}


module.exports.addUser = async(req, res) => {
    try {
        const {username, email, difficulty, relevance } = req.body

         // Vérification si le nom de la ville existe déjà

        if(!username || !email || !difficulty || !relevance) {
            return res.status(400).json({sucess: false, message: "Veuillez remplir toutes les informations"});
        }

            const newUser = await new userModel({
                username,
                email,
                difficulty,
                relevance
            });

            const savedUser = await newUser.save();

            res.status(201).json({success: true, message: 'Ajoutée avec succes', User: savedUser});

    } catch(err){
        res.status(500).json({success: false, message: "Une erreur est survenue lors de l\'ajout de la formation", err})
    }

};
