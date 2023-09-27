import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import asyncMock from "./asyncMock";

const ItemDetailContainer = ({ match }) => {
  const { id } = match.params;
  const [flightPackage, setFlightPackage] = useState(null);

  useEffect(() => {
    
    setTimeout(() => {
      const packageData = asyncMock.find((item) => item.id === id);
      setFlightPackage(packageData);
    }, 1000);
  }, [id]);

  return (
    <div>
      {flightPackage ? (
        <div>
          <h2>Detalles del Paquete de Vuelo a {flightPackage.destination}</h2>
          <p>Compañía Aérea: {flightPackage.airline}</p>
          <p>Precio: {flightPackage.price} USD</p>
          <p>Duración del Vuelo: {flightPackage.duration}</p>
          {/* Otros detalles del paquete */}
          <ItemCount stock={flightPackage.stock} />
        </div>
      ) : (
        <p>Cargando detalles del paquete...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;