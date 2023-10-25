import React from "react";
import { DataTable as DataTableType } from "../interfaces/definitions";
import "../css/styles.css";

export const DataTable: React.FC<DataTableType> = ({ data }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Estado</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Monedas de oro</th>
            <th>Monedas de plata</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dato, index) => (
            <tr key={index}>
              <td>{dato.productId}</td>
              <td>{dato.active.toString()}</td>
              <td>{dato.name}</td>
              <td>
                {dato.description
                  ? dato.description
                  : "Descripción no disponible"}
              </td>
              <td>{dato.category}</td>
              <td>{dato.goldCoins}</td>
              <td>{dato.silverCoins}</td>
              <td>{dato.image}</td>
              <td>
                <button type="button" onClick={handleOpenModal}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
