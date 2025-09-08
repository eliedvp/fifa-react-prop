import React from "react";
import players from "../data/players";  
import Player from "./Player";   
import { Container, Row, Col } from "react-bootstrap";

const PlayerList = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Liste des Joueurs FIFA</h1>
      <Row>
        {players.map((player) => (
          <Col key={player.id} md={4} sm={6} xs={12}>
            {/* Spread operator pour passer tous les attributs */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayerList;
