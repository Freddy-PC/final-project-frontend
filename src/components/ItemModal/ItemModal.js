import React, { useState, useEffect } from "react";
import "./ItemModal.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function ItemModal({ pokemonData, onClose, onClick, firstColor, secondColor }) {
  const hasSecondType = pokemonData.types?.["1"]?.type.name;
  const cardTypeClassName = `item-modal__type ${
    hasSecondType ? "item-modal__type-display" : "item-modal__type"
  } `;

  // if first or second ability is not hidden then display
  const secondAbility = pokemonData.abilities?.[1]?.is_hidden === false;
  const secondaryAbilityClassName = `item-modal__ability-second ${
    secondAbility ? "item-modal__ability-second" : "item-modal__hidden-ability"
  } `;

  // if 2nd or 3rd ability 'is-hidden' then display
  const hasHidden =
    pokemonData.abilities?.[2]?.is_hidden ||
    pokemonData.abilities?.[1]?.is_hidden === true;
  const hiddenAbilityClassName = `item-modal__ability ${
    hasHidden ? "item-modal__ability" : "item-modal__hidden-ability"
  } `;

  const secondShinyImage =
    pokemonData.sprites?.versions["generation-v"]["black-white"].animated
      .back_default ||
    pokemonData.sprites?.back_default ||
    pokemonData.sprites?.front_female;
  const secondShinyImageClassName = `item__image ${
    secondShinyImage ? "item__image" : "item__image-hidden"
  } `;

  const kilograms = pokemonData.weight / 10; // api in hectograms
  const pounds = (kilograms * 2.205).toFixed(1);

  const meters = pokemonData.height / 10; // api in decimeter
  const totalHeight = meters * 39.57;
  const feet = Math.floor(meters * 3.28);
  const inches = Math.floor(totalHeight - feet * 12);

  // Chart
  const [hp, setHp] = useState("");
  const [a, setA] = useState("");
  const [sa, setSa] = useState("");
  const [d, setD] = useState("");
  const [sd, setSd] = useState("");
  const [s, setS] = useState("");

  // Name is set but value is conditional to api data
  const data = [
    { name: "hp", value: hp },
    { name: "attack", value: a },
    { name: "s-att", value: sa },
    { name: "defense", value: d },
    { name: "s-def", value: sd },
    { name: "speed", value: s },
  ];

  useEffect(() => {
    setHp((data["0"].value = pokemonData.stats?.["0"]?.base_stat));
    setA((data["1"].value = pokemonData.stats?.["1"]?.base_stat));
    setD((data["2"].value = pokemonData.stats?.["2"]?.base_stat));
    setSa((data["3"].value = pokemonData.stats?.["3"]?.base_stat));
    setSd((data["4"].value = pokemonData.stats?.["4"]?.base_stat));
    setS((data["5"].value = pokemonData.stats?.["5"]?.base_stat));
  }, [pokemonData]);

  return (
    <div className="item-modal" onClick={onClick}>
      <div className="item-modal__container">
        <button
          onClick={onClose}
          type="button"
          className="item-modal__close-button"
          alt="close button"
        />

        <div className="item-modal__header">
          <p className="item-modal__name">
            {pokemonData.name} / {pokemonData.id}
          </p>
          <div className="item-modal__types">
            <h2
              className="item-modal__type"
              style={{ backgroundColor: firstColor }}
            >
              {pokemonData.types?.["0"].type.name}
            </h2>
            <h2
              className={cardTypeClassName}
              style={{ backgroundColor: secondColor }}
            >
              {pokemonData.types?.["1"]?.type.name}
            </h2>
          </div>
        </div>

        <div className="item__image-container">
          <img
            src={
              pokemonData.sprites?.versions["generation-v"]["black-white"]
                .animated.front_shiny || pokemonData.sprites?.front_shiny
            }
            alt="pokepic-front"
            className="item__image"
          />
          <img
            src={
              pokemonData.sprites?.versions["generation-v"]["black-white"]
                .animated.back_shiny ||
              pokemonData.sprites?.back_shiny ||
              pokemonData.sprites?.front_female
            }
            alt="pokepic-back"
            className={secondShinyImageClassName}
          />
        </div>
        <div className="item-modal__info">
          <div className="item-modal__default-abilities">
            <p className="item-modal__ability">
              Abilities {"-->"} {pokemonData.abilities?.[0]?.ability?.name}
            </p>
            <p className={secondaryAbilityClassName}>
              {"  or "}
              {pokemonData.abilities?.[1]?.ability?.name}
            </p>
          </div>
          <p className={hiddenAbilityClassName}>
            Hidden-Ability {"-->"}{" "}
            {pokemonData.abilities?.[2]?.ability?.name ||
              pokemonData.abilities?.[1]?.ability?.name}
          </p>
          <div className="item-modal__description">
            <p className="item-modal__text">
              Weight: {kilograms} kg or {pounds} ibs
            </p>
            <p className="item-modal__text">
              Height: {meters} meters or {feet}"{inches}'
            </p>
          </div>
        </div>
        <div className="item-modal__chart">
          <BarChart width={300} height={200} data={data}>
            <XAxis
              dataKey="name"
              className="item-modal__chart-name"
              stroke="#000"
            />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="" />
            <Bar dataKey="value" fill="#2F71E5" barSize={22} />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
