import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import Pokemon from "../Components/Pokemon";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import Button from "@restart/ui/esm/Button";

const HomePage = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemonData = async (i) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const getPokemon = async () => {
    setLoading(true);
    let pokemonArr = [];
    for (let i = 1; i <= 6; i++) {
      let id = Math.floor(Math.random() * 100) + 1;
      pokemonArr.push(await getPokemonData(id));
    }
    setPokemon(pokemonArr);
    localStorage.setItem("dbPokemon", JSON.stringify(pokemonArr));

    setLoading(false);
  };

  const checkDb = () => {
    const localDb = localStorage.getItem("dbPokemon");
    const dbPokemon = JSON.parse(localDb);
    if (dbPokemon) {
      setPokemon(dbPokemon);
      setLoading(false);
    } else {
      getPokemon();
    }
  };

  useEffect(() => {
    checkDb();
  }, []);

  const tangkapHandler = async (id) => {
    const localDb = localStorage.getItem("dbPokemon");
    const localBag = localStorage.getItem("dbBag");

    const dbPokemon = JSON.parse(localDb);
    const dataArr = [];
    const dapat = async () => {
      if (localBag === null) {
        dataArr.push(await getPokemonData(id));

        localStorage.setItem("dbBag", JSON.stringify(dataArr));
        for (let index = 0; index < dbPokemon.length; index++) {
          if (dbPokemon[index].data.id === id) {
            dbPokemon.splice(index, 1);
          }
        }
        console.log(dataArr);
        alert("Yesss Dapatt!!!");
        setPokemon(dbPokemon);
        localStorage.setItem("dbPokemon", JSON.stringify(dbPokemon));
        setLoading(false);
      } else {
        let BagArr = JSON.parse(localBag);
        BagArr.push(await getPokemonData(id));
        localStorage.setItem("dbBag", JSON.stringify(BagArr));
        for (let index = 0; index < dbPokemon.length; index++) {
          if (dbPokemon[index].data.id === id) {
            dbPokemon.splice(index, 1);
          }
        }
        setPokemon(dbPokemon);
        alert("Yesss Dapatt!!!");
        localStorage.setItem("dbPokemon", JSON.stringify(dbPokemon));
        setLoading(false);
      }
    };

    const kabur = () => {
      for (let index = 0; index < dbPokemon.length; index++) {
        if (dbPokemon[index].data.id === id) {
          dbPokemon.splice(index, 1);
        }
      }
      alert("yahh kabur");
      setPokemon(dbPokemon);
      localStorage.setItem("dbPokemon", JSON.stringify(dbPokemon));
      setLoading(false);
    };

    // probabilitas 50%
    let randomNum = Math.random();

    if (randomNum <= 0.5) {
      kabur();
    } else {
      dapat();
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          <div className="text-center">
            <h1>Ketemuuu!!</h1>
            <p>Click untuk Tangkap!!</p>
            <Row>
              <Col md={6} xs={6} className="d-flex justify-content-start">
                <Button onClick={getPokemon} className="btn btn-success">
                  <FontAwesomeIcon icon={faSearch} className="me-2" />
                  Cari Lagi
                </Button>
              </Col>
              <Col md={6} xs={6} className="d-flex justify-content-end">
                <Link to="/tas" className="btn btn-secondary">
                  <FontAwesomeIcon icon={faSuitcase} className="me-2" />
                  Tas
                </Link>
              </Col>
            </Row>
          </div>
          {pokemon.map((p) => (
            <Col key={p.data.id} xs={12} sm={12} md={4}>
              <Pokemon pokemon={p.data} tangkap={tangkapHandler} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
