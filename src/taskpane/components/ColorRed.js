import React from "react";
import { useState } from "react";

const ColorRed = () =>{
  
  const [name, setName] = useState("");
    const click = async () => {
        try {
          await Excel.run(async (context) => {

            const range = context.workbook.getSelectedRange();
            range.load("values");
            let valArray = range.load("values");
            
  
            // range.format.fill.color = `${name}`;
            // console.log(name);
    
            let range2 = context.workbook.worksheets.getItem('Sheet1');
            let array=[];
            await context.sync();
            for(let i=0;i<3;i++){
              for(let j=0; j<3;j++){
                console.log(`${range.values[i][j]}`);
                array.push(`${range.values[i][j]}`);
              }
              
            }
            console.log(array);
            for(let k=1; k<array.length; k++){
              range2.getRange(`A${k}`).values = array[k-1]

            }
            // console.log(`${range.values[1]}`);
            // console.log(`${range.values[2]}`);
           //let range2 = context.workbook.worksheets.getItem('Sheet1').getRange("B2:D2");
          //range2.values= [[`${range.values[0]}`, `${range.values[1]}`,`${range.values[2]}`]]

         
          });
        } catch (error) {
          console.error(error);
        }
      };
    return(
    <div>
       <h4>The below button colors your selected cell to Red</h4>
       <form onSubmit={click}>
      <label>Enter your preferred color:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>

    { <button onClick={click}>Color the cell</button>}

   </div>
    )
}

export default ColorRed;