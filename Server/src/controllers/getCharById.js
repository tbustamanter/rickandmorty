const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(URL + id);

    if (!data.name) throw new Error("Not Found");

    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin.name,
      image: data.image,
      gender: data.gender,
    };
    return res.status(200).json(character);

    //return res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// const getCharById = (req, res) => {
//   const { id } = req.params;

//   axios(URL + id)
//     .then((response) => response.data)
//     .then((data) => {
//       //id, status, name, species, origin, image y gender.
//       if (data.name) {
//         const character = {
//           id: data.id,
//           status: data.status,
//           name: data.name,
//           species: data.species,
//           origin: data.origin.name,
//           image: data.image,
//           gender: data.gender,
//         };

//         return res.status(200).json(character)
//       }
//       return res.status(404).send('Not found')
//     })
//     .catch(error => res.status(500).send(error.message))
// };

module.exports = { getCharById };
