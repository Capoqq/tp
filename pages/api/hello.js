// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios')
export default function handler(req, res) {
  //res.status(200).json({ name: 'John Doe' })
  const { method } = req;
  switch (method) {
    case "GET":

      axios
        .get('https://pokeapi.co/api/v2/generation/1/')
        .then(response => {
          //console.log(`statusCode: ${res.status}`)
          res.status(200).json(response.data)
          //console.log(response.data.data)
        })
        .catch(error => {
          console.error(error)
        })
      //fetch('https://pokeapi.co/api/v2/ability/pikachu/').then(response => res.status(200).json(response))
      break;

    default:
      break;
  }
}
