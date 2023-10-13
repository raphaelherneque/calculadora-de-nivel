const victoriesLevel = [
    {min: 0, max: 10, nivel: "Ferro"},
    {min: 11, max: 20, nivel: "Bronze"},
    {min: 21, max: 50, nivel: "Prata"},
    {min: 51, max: 80, nivel: "Ouro"},
    {min: 81, max: 90, nivel: "Diamante"},
    {min: 91, max: 100, nivel: "Lendário"}
]

function calculateBalance(victories, defeats) {
    const victoriesBalance = victories - defeats
    let heroLevel = "Imortal"
    for (const level of victoriesLevel) {
        if (victories >= level.min && victories <= level.max) {
            heroLevel = level.nivel
            break
        }
    }

    return `O Herói tem saldo de ${victoriesBalance} e está no nível de ${heroLevel}`
}


const victories = 255
const defeats = 102
const result = calculateBalance(victories, defeats)
console.log(result)
