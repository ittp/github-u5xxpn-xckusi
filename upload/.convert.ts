import fs from 'fs-extra';
// import axios from 'axios';

let { parser } = require('csv');

export default parser;

// export const csv2Array = async (data: any) => {
//   //read file from input
//   //this.fileReaded = fileInput.target.files[0];

//   //let reader: FileReader = new FileReader();
//   // reader.readAsText(this.fileReaded);

//   let csv: string = data.result;
//   let allTextLines = csv.split(/\r|\n|\r/);
//   let headers = allTextLines[0].split(',');
//   let lines = [];

//   for (let i = 0; i < allTextLines.length; i++) {
//     // split content based on comma
//     let data = allTextLines[i].split(',');
//     if (data.length === headers.length) {
//       let tarr = [];
//       for (let j = 0; j < headers.length; j++) {
//         tarr.push(data[j]);
//       }

//       // log each row to see output
//       console.log(tarr);
//       lines.push(tarr);
//     }
//   }
// };
