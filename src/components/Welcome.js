// write code for Welcome component here
import React from "react";

function Welcome(props) {
    return (
        <div>
            <h1>Hey!{props.name}</h1>
            <h2>{props.msg}</h2>
        </div>
    );
}

// export  default Welcome;

// const Welcome = ({name}) => {
//     let sayHi = `Hey ${name}!`;
//     let greetMessage = `Welcome to Newton School.`;
//     return (
//         <div>
//             <h1>{sayHi}</h1>
//             <h2>{greetMessage}</h2>
//         </div>
//     );
// };

export default Welcome;