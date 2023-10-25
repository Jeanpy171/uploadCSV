import React from "react";
import { Product } from "../interfaces/definitions";
import { useLoadCSV } from "../hooks/useLoadCSV";
import { DataTable } from "./DataTable";
import { addDinamicDocument } from "./firebase";

export const CSVUploader = () => {
  const { elements, loadCSV } = useLoadCSV();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    //console.log("EJECUTANDO LECTURA DE CSV: ", typeof files);
    if (!files || !files[0]) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e?.target?.result as string;
      loadCSV(contents);
    };

    reader.readAsText(files[0]);
  };

  const handleUploadData = () => {
    elements.map((product) => {
      addDinamicDocument("products", product.productId, product);
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <button onClick={handleUploadData}>Upload</button>
      {/* {elements.map((object) => {
        return <div key={object.productId}>{object.name}</div>;
      })}{elements.map((object) => {
        return <div key={object.productId}>{object.name}</div>;
      })} */}
      <h1>Tabla de Datos</h1>
      <DataTable data={elements} />
    </div>
  );
};
