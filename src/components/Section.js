import React from "react";
import Title from "./Title";
import Movies from "./Movies";
import data from "../assets/data.json";

console.log(data);

const Section = () => {
  return (
    <div>
      {data.map((title, index) => {
        return (
          <div>
            <h1 className="fondTitre">
              <Title key={index} category={title.category} />
            </h1>

            {data.map((pictures, index2) => {
              return (
                <div className="fondImages">
                  <Movies key={index2} images={pictures.images} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Section;

// function Section(props) {
//   return (
//     <div>
//       <header>
//         {" "}
//         <Title category={props.category} />
//       </header>
//       <div>
//         {/* <Movies images={props.images} /> */}
//         <Movies key={index} images={props.images} />
//       </div>
//     </div>
//   );
// }
