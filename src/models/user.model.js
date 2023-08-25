const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');


const userSchema = mongoose.Schema(
    {
    _id: {
        type: String,
        default: uuidv4, // Génère un UUID unique pour chaque nouvel utilisateur
      },
      username: {
        type: String,
    
      },
      email: {
        type: String,
        
      },
    
      difficulty: {
          type: Number,
        
        },
      relevance: {
          type: Number,
          
      },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('user', userSchema)