import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./Carddata";
import "../Components/style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../Action/Action";

function Cards() {
  const [data, setData] = useState(Cardsdata);
  //console.log(data);

  const dispatch = useDispatch();
  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };
  

  return (
    <div className="container mt-3  ">
      <h2 className="text-center"> Add To Cart </h2>{" "}
      <div className="row1" style={{display:"grid",justifyContent:"center",alignContent:"center",gridTemplateColumns:"1fr 1fr 1fr"}}>
        {data.map((element, id) => {
          return (
           
              <Card
                style={{width:"20rem",margin:"20px", border: "none"}}
                className="card_style" key={id}
              >
                <Card.Img
                  variant="top"
                  src={element.img}
                  style={{ height: "13rem" }}
                />{" "}
                <Card.Body>
                  <Card.Title> {element.name} </Card.Title>{" "}
                  <Card.Text>Price: {element.price} </Card.Text>{" "}
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary col-lg-12"
                      onClick={() => send(element)}
                    >
                      {" "}
                      Add to Cart{" "}
                    </Button>{" "}
                  </div>{" "}
                </Card.Body>{" "}
              </Card>
            
          );
        })}
      </div>{" "}
    </div>
  );
}

export default Cards;
