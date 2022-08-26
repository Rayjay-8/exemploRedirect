import { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styled from "@emotion/styled";

// style global

const Objetivo = styled.div`
   background-color: transparent;
   display:flex;
   text-align: center;
   justify-content: center;
`;

const HFlask = styled.div`
   display: flex;
   flex-direction: row;
   gap: ${(props) => props.gap ?? 0};
`;

// Atoms
/**
 *
 *
 * @param {HTMLButtonElement} props
 * @return {HTMLButtonElement}
 */
const Button = (props) => {
   const { children, ...rest } = props;
   return <button {...rest}>{children}</button>;
};

/**
 *
 *
 * @param {HTMLInputElement} props
 * @return {HTMLInputElement}
 */
const Input = (props) => {
   const { regra, ...rest } = props;
   return <input {...rest} />;
};

/**
 *
 *
 * @param {HTMLInputElement}
 * @param {number} init - Valor inicial
 * @return {HTMLDivElement}
 */
const Counter = (props) => {
   const { init = 0, showButtons, ...rest } = props;
   const [count, setCount] = useState(init);

   const handler = (cb = (prev) => prev + 1) => {
      setCount(cb);
   };

   return (
      <>
         <HFlask gap={"1rem"}>
            {showButtons && (
               <Button onClick={() => handler((prev) => prev - 1)} {...rest}>
                  -
               </Button>

               // <Input
               // onClick={() => handler((prev) => prev - 1)}
               // {...rest}
               // type="button"
               // value="-"
               // />
            )}
            <Input
               value={count}
               onChange={(event) => handler(parseInt(event.target.value))}
               type="number"
               {...rest}
            ></Input>
            {showButtons && (
               <Button
                  className="lg"
                  onClick={() => handler((prev) => prev + 1)}
                  {...rest}
               >
                  +
               </Button>
            )}
         </HFlask>
      </>
   );
};

const TESTE = () => {
   return (
      <>
         <h3>Count Component</h3>
    
         <br></br>
         <Objetivo>
            <Counter
               regra={{ requeired: true }}
               regra2={[1,2,3,4,5]}
               init={10}
               type="email"
               showButtons
            />
         </Objetivo>
         <br></br>
         <code> Requerimentos </code>
         <br></br>
         <code> Validar props do component pai </code>
   

         <details>
         <summary>Codigo</summary>
            <code>
               
            </code>
         </details>
      </>
   );
};

export default TESTE;
