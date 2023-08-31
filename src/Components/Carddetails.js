import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT, ADD, REMOVE } from "../Action/Action";

function Carddetails() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // add data

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center"> Item Details Page </h2>{" "}
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.img} />
                  </div>{" "}
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong> Name </strong>: {ele.name}{" "}
                          </p>{" "}
                          <p>
                            <strong> Price </strong>: {ele.price}{" "}
                          </p>{" "}
                          <p>
                            <strong> Total </strong>: {ele.price * ele.qnty}{" "}
                          </p>{" "}
                          <p>
                            <div
                              className="mt-5 d-flex justify-content-between align-items-center"
                              style={{
                                width: 100,
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                            >
                              <span
                                style={{ fontSize: 24 }}
                                onClick={
                                  ele.qnty <= 1
                                    ? () => dlt(ele.id)
                                    : () => remove(ele)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span
                                style={{ fontSize: 24 }}
                                onClick={() => send(ele)}
                              >
                                +
                              </span>
                            </div>{" "}
                            <strong> Remove: </strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(ele.id)}
                              ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>{" "}
                    </Table>{" "}
                  </div>{" "}
                </>
              );
            })}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </>
  );
}

export default Carddetails;
