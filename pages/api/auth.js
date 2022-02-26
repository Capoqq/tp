import conectarDB from "../../lib/mongodb";
import user from "../../models/user";
export default async function handler(req, res) {
    await conectarDB()
  const { method } = req;
  switch (method) {
    case "GET":
      await user
        .find()
        .then((response) => res.status(200).json(response))
        .catch((error) => res.status(400).json("error", error));
      break;
    case "POST":
      const { body } = req;

      if (!body.userName || !body.password) {
        res.status(401).json({ error: "Faltan datos", code: "401" });
      }
      const dataUser = await user.findOne({
        userName: body.userName,
      });
      if (!dataUser)
        res.status(400).json({ error: "El usuario no existe", code: "401" });
      if ( dataUser && dataUser.password === body.password) {
        res.status(200).json(dataUser);
    
      }else{
          res.status(400).json({error:'Usuario o contrasena incorrectas', code:'401'})
        }
      

    default:
      break;
  }
}
