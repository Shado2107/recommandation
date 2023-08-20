const mongoose = require("mongoose");

const formationSchema = mongoose.Schema(
    {
        nom: {
            type: String
        },

        difficulté: {
            type: Number
        },
        interet: {
            type: Number
        },
        pertinence: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('formations', formationSchema)
