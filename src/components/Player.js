// src/Player.js
import React from "react";
import { Card } from "react-bootstrap";

const Player = ({
  name = "Nom inconnu",
  team = "Équipe inconnue",
  nationality = "Nationalité inconnue",
  jerseyNumber = "N/A",
  age = "N/A",
  photo = "https://via.placeholder.com/200x200?text=No+Image"
}) => {
  const cardStyle = {
    width: "18rem",
    margin: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    overflow: "hidden"
  };

  const imgStyle = {
    height: "200px",
    objectFit: "cover"
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={photo} alt={name} style={imgStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {team} <br />
          <strong>Nationalité:</strong> {nationality} <br />
          <strong>Numéro:</strong> {jerseyNumber} <br />
          <strong>Âge:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
