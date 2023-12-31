import { useState } from "react";
import { Product } from "../interfaces/definitions";

export const useLoadCSV = () => {
  const [elements, setElements] = useState<Product[]>([]);

  const loadCSV = (data: string) => {
    const lines = data.split("\n");

    const result: Array<Product> = [];

    for (let i = 5; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        // Usamos una expresión regular para encontrar los campos dentro de comillas dobles
        const idIndex = line.split('"');
        //console.log(idIndex)
        const splitData = line.split(",");
        console.log("DATO EN CADENA: ", splitData)
        let formatData: Product = {
          active: true,
          productId: "producto-" + splitData[0],
          name: splitData[1],
          category: splitData[3],
          goldCoins: parseInt(splitData[5]),
          silverCoins: parseInt(splitData[6]),
          image: splitData[7],
        };
        console.log("DATO: ", formatData)
        if (splitData[2]) {
          formatData.description = splitData[2];
        }

        if (idIndex.length >= 3) {
          const partA = idIndex[0].split(",");
          const partB = idIndex[1];
          const partC = idIndex[2].split(",");
          console.log("ESTO ESTA EN CADENA PARTE B: ", partB)
          console.log("ESTO ESTA EN CADENA PARTE C: ", partC)
          formatData.description = partB;
          formatData.category = partC[1];
          formatData.goldCoins = parseInt(partC[3]);
          formatData.silverCoins = parseInt(partC[4]);
          formatData.image = partC[5];
        }

        result.push(formatData);
      }
    }

    setElements(result);
  };

  return { elements, loadCSV };
};
