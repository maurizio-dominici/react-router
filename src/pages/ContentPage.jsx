// Imports
import axios from "axios";
import { useEffect, useState } from "react";

export default function ContentPage() {
  const manActorsUrl = "https://lanciweb.github.io/demo/api/actors/";
  const girlActorsUrl = "https://lanciweb.github.io/demo/api/actresses/";
  const [manActors, setManActors] = useState([]);
  const [girlActors, setGirlActors] = useState([]);
  const [allActors, setAllActors] = useState([]);
  useEffect(() => {
    // fetch attori
    axios
      .get(manActorsUrl)
      .then((res) => {
        const arrActors = res.data;
        // console.log(arrActors);
        const normalizedActors = arrActors.map((actor) => {
          const { name, birth_year, nationality, biography, image, awards } =
            actor;
          return { name, birth_year, nationality, biography, image, awards };
        });
        setManActors(normalizedActors);
      })
      .catch((err) => {
        console.log("Errore nel caricamento dati di " + actorsUrl);
      });
    // fetch attrici
    axios
      .get(girlActorsUrl)
      .then((res) => {
        const arrActors = res.data;
        // console.log(arrActors);
        const normalizedGirlActors = arrActors.map((actor) => {
          const { name, birth_year, nationality, biography, image, awards } =
            actor;
          return { name, birth_year, nationality, biography, image, awards };
        });
        setGirlActors(normalizedGirlActors);
      })
      .catch((err) => {
        console.log("Errore nel caricamento dati di " + girlActorsUrl);
      });
  }, []);
  // funzioni
  const renderActorCard = (actor, index) => {
    return (
      <div className="card mb-2" key={index}>
        <img src={actor.image} alt={actor.name} />
        <div className="card-body">
          <h5 className="card-title">{actor.name}</h5>
          <p className="card-text">{actor.birth_year}</p>
          <p className="card-text small">{actor.nationality}</p>
          <p className="card-text">{actor.biography}</p>
          <p className="card-text ">{actor.awards}</p>
        </div>
      </div>
    );
  };
  return (
    <main>
      <div className="container">
        <h1 className="text-center my-4">Attori</h1>
        <div className="row row-cols-4">{manActors.map(renderActorCard)}</div>
        <h1 className="text-center my-4">Attrici</h1>
        <div className="row row-cols-4">{girlActors.map(renderActorCard)}</div>
      </div>
    </main>
  );
}
