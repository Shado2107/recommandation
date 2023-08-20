const synaptic = require("synaptic");
const { trainingData } = require("./trainingData");
const {Layer, Network, Trainer} = synaptic;

const inputLayer = new Layer(2);
const outputLayer = new Layer(1);
inputLayer.project(outputLayer);

const neuralNetwork = new Network({
    input: inputLayer,
    output: outputLayer
});


const trainer = new Trainer(neuralNetwork);
trainer.train(trainingData, {
    iterations: 1000,
    error: 0.005,
});


module.exports = {neuralNetwork};

