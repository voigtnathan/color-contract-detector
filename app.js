
// basic neuralnetowrk script using brain js
// script in written in the html as inline for simplicity's sake

const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
    { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } },
    { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { black: 0 } },
    { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { black: 0 } },
    { input: { r: 0.0431, g: 0.3458, b: 0.2627 }, output: { black: 0 } },
    { input: { r: 0.9333, g: 0.8784, b: 0.5686 }, output: { black: 1 } },
    { input: { r: 0.3490, g: 0.2705, b: 0.8901 }, output: { black: 0 } },
    { input: { r: 0.3843, g: 0.4862, b: 0.0941 }, output: { black: 0 } },
    { input: { r: 0.2274, g: 0.0078, b: 0.8627 }, output: { black: 0 } },
    { input: { r: 0.3764, g: 0.3843, b: 0.6941 }, output: { black: 0 } },
    { input: { r: 0.2862, g: 0.5960, b: 0.0470 }, output: { black: 0 } },
    { input: { r: 0.6549, g: 0.7019, b: 0.7098 }, output: { black: 1 } },
    { input: { r: 0.0431, g: 0.0666, b: 0.4862 }, output: { black: 0 } },
    { input: { r: 0.8431, g: 0.4431, b: 0.2627 }, output: { black: 0 } },
]);

const result = network.run();
console.log(result);