

const profile = (request , response) => {
    return response.send([
        {
            name : 'mahima',
            email : "ea@gmail.com",

        }
    ])
}
const dashboard = (request, response) => {
    return response.send([
        {randomArticle : 'random article'}
    ])
}

module.exports = {profile , dashboard}