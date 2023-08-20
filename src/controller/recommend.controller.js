const { neuralNetwork } = require("../lib/synaptic");
const userModel = require("../models/user.model")


module.exports.recommend = async (req, res) => {
   const userID = req.params.id;

   const user = await userModel.findById(userID);

   if(!user){
        res.status(404).json({success: false, message: " non trouvée"})
   }

   const Preferences = user.preferences;
   const recommendation = neuralNetwork.activate(Preferences);

   res.status(200).json({success: true, Recommendation: recommendation})

}