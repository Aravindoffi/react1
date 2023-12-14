// import logo from './logo.svg';
import "./App.css";
// import { useState } from "react"

import { info } from "./Data";

import Prod from "./Prod.js";
export default function App() {
  const data = info;
  return (
    <div className="App">
      {data.map((item) => {
        //console.log("Name",item)
        return <Prod prod={item} />;
      })}
    </div>
  );
}

// let info = [ { one: { value: "Free", isBlur: true }, two: { value: "singleUser", isBlur: true }, three: { value: "50GB", isBlur: false }, four: { value: "Unlimited", isBlur: false }, }
// , { one: { value: "Plus", isBlur: false }, two: { value: "5 user", isBlur: true }, three: { value: "50GB", isBlur: false }, four: { value: "Limited", isBlur: false }, }
// , { one: { value: "Plus", isBlur: false }, two: { value: "5 user", isBlur: false }, three: { value: "50GB", isBlur: false }, four: { value: "Limited", isBlur: true }, }, ];

// // val1: "Free",
// // val2: "$0/month",
// // val3: "single User",
// // val4: "50GB Storage",
// // val5: "Unlimited Public projects",
// // val6: "community Access",
// // val7: "Unlimited Private projects",
// // val8: "dedicated Phone support",
// // val9: "Free subdomain",
// // val10: "Monthly status report",

// //   },
// // {
// //   val1: "plus",
// //   val2: "$9/month",
// //   val3: "5 User",
// //   val4: "50GB Storage",
// //   val5: "Unlimited Public projects",
// //   val6: "community Access",
// //   val7: "Unlimited Private projects",
// //   val8: "dedicated Phone support",
// //   val9: "Free subdomain",
// //   val10: "Monthly status report",

// // },
// // {
// //   val1: "pro",
// //   val2: "$49/month",
// //   val3: "multiple User",
// //   val4: "50GB Storage",
// //   val5: "Unlimited Public projects",
// //   val6: "community Access",
// //   val7: "Unlimited Private projects",
// //   val8: "dedicated Phone support",
// //   val9: "Free subdomain",
// //   val10: "Monthly status report",

// // }]
// // function App() {
// //   const list = info
// //   return (
// //     <div className="App">
// //       <div className = "prod1">
// //       {list.map((name)=>(
// //        <Price prod={name} />

// //       )

// //       )}
// //       </div>
// //     </div>
// //   );
// // }
// // function Profile(pro){
// // return (
// //   <h1> Hi {pro.b}</h1>
// // )
// // }
// function Price(prod) {
// //   // let like = 10;

//   return (
//     <div className="prod-container">
//      <div className="card">
//      {Object.keys(prod).map((element) => { console.log("ELement", element);
//      let selectedClass = prod[element].isBlur ? "normal" : "blur"; return <p className={selectedClass}>{prod[element].value}</p>; })}
//         <button className="btn btn-primary car-b">Button</button>
//   </div>
// </div>

//   )
// }
// export default App;
