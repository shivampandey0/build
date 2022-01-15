// Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

//     Formula : 0.5 * m * v * v

const findKineticEnergy = (mass,volume) => (0.5 * mass * volume * volume).toFixed(3)

console.log(findKineticEnergy(55,3.87));