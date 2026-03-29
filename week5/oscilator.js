fs = require('fs');

function generateSoundBuffer(sampleRate, frequency,phase, duration, func) {
        let buffer = Buffer.alloc(sampleRate * duration  * 2); // duration seconds of stereo audio at sampleRate, 16-bit
    for (let i = 0; i < buffer.length/2 ; i += 1) {
        let sample = func((((i / sampleRate)*2*Math.PI+phase) * frequency)% (Math.PI * 2)); // Get the sample value from the provided function
        buffer.writeInt16LE(sample * 0x7FFF, i * 2); 
    }
    return buffer;
}


function generateSineWave(sampleRate, frequency, phase, duration) {
    return generateSoundBuffer(sampleRate, frequency, phase, duration, (t) => Math.sin(t));
}

function generateSquareWave(sampleRate, frequency, phase, duration) {
    return generateSoundBuffer(sampleRate, frequency, phase, duration, (t) => Math.round(Math.sin(t)* 0.5 + 0.5)*2-1);
}

function generateSawtoothWave(sampleRate, frequency, phase, duration) {
    return generateSoundBuffer(sampleRate, frequency, phase, duration, (t) => t / Math.PI - 1);
}

function generateTriangleWave(sampleRate, frequency, phase, duration) {
    return generateSoundBuffer(sampleRate, frequency, phase, duration, (t) => Math.abs(t / Math.PI - 1) * 2 - 1);
}

let sampleRate = 44100;
let frequency = 440;
let phase = 0;
let duration = 1;
let buffer = generateSineWave(sampleRate, frequency, phase, duration);
fs.writeFileSync('sine.raw',buffer)
 buffer = generateSquareWave(sampleRate, frequency, phase, duration);
fs.writeFileSync('square.raw',buffer)
 buffer = generateSawtoothWave(sampleRate, frequency, phase, duration);
fs.writeFileSync('sawtooth.raw',buffer)
    buffer = generateTriangleWave(sampleRate, frequency, phase, duration);
fs.writeFileSync('triangle.raw',buffer)
