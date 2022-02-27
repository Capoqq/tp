import { useSelector } from "react-redux";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
export default function Admin() {
  const [pokemon, setPokemon] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const router = useRouter();
  const getData = async () => {
    await axios.get("/api/hello").then((res) => {
      if (res.status == 200) {
        setPokemon(res.data.pokemon_species);
        console.log(res);
      }
    });
  };
  const uppercase = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const { user } = useSelector((state) => state.reducer);
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (user?.typeUser !== 1) {
      router.replace("/");
    } else {
      getData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        {user?.typeUser !== 1 ? null : (
          <>
            <Header />
            <h1 className="text-center my-2">Este es el administrador</h1>
           <div className="list-group">
            {pokemon.map((poke) => (
              <button type="button" key={poke.url} className="list-group-item list-group-item-action">{uppercase(poke.name)}</button>
             
              
            ))}
           </div>
          </>
        )}
        {/*  {
         user !== 'undefined' && user?.typeUser === 1 (
            <>
           
            </>
          )
        } */}
      </div>
    </>
  );
}
