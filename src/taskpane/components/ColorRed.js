import * as React from "react";
const ColorRed = () =>{
    const click = async () => {
        try {
          await Excel.run(async (context) => {
            /**
             * Insert your Excel code here
             */
            const range = context.workbook.getSelectedRange();
    
            // Read the range address
            range.load("address");
    
            // Update the fill color
            range.format.fill.color = "red";
    
            await context.sync();
            console.log(`The range address was ${range.address}.`);
          });
        } catch (error) {
          console.error(error);
        }
      };
    return(
    <div>
       <h4>The below button colors your selected cell to Red</h4>
    { <button onClick={click}>Color Red</button>}

   </div>
    )
}

export default ColorRed;