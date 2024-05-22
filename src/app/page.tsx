 "use client";
 import { useState } from 'react';

 const TicTacToe = () => {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [xIsNext, setXIsNext] = useState(true);
 
   const handleClick = (i:any) => {
     if (calculateWinner(squares) || squares[i]) {
       return;
     }
     const nextSquares = squares.slice();
     nextSquares[i] = xIsNext ? 'X' : 'O';
     setSquares(nextSquares);
     setXIsNext(!xIsNext);
   };
 
   const renderSquare = (i:any) => {
     return (
       <button
         className="w-16 h-16 border border-gray-500 text-2xl font-bold flex items-center justify-center"
         onClick={() => handleClick(i)}
       >
         {squares[i]}
       </button>
     );
   };
 
   const winner = calculateWinner(squares);
   let status;
   if (winner) {
     status = 'Winner: ' + winner;
   } else {
     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
   }
 
   return (
     <div className="flex flex-col items-center">
      <h2 className='bg-gray-300 text-2xl px-3 m-3 font-bold border-4 border-gray-500 hover:bg-green-300 hover:border-blue-500 border-5 '>TIC TAC TOE GAME</h2>
       <div className="text-2xl font-bold px-2 mb-4 border-2 border-gray-500 bg-green-300 ">{status}</div>
      
       <div className="grid grid-cols-3 gap-0 bg-yellow-200 hover:bg-slate-300">
         {renderSquare(0)}
         {renderSquare(1)}
         {renderSquare(2)}
         {renderSquare(3)}
         {renderSquare(4)}
         {renderSquare(5)}
         {renderSquare(6)}
         {renderSquare(7)}
         {renderSquare(8)}
       </div>
     </div>
   );
 };
 
 const calculateWinner = (squares:any) => {
   const lines = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
     const [a, b, c] = lines[i];
     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
       return squares[a];
     }
   }
   return null;
 };
 
 export default function Home() {
   return (
     <div className="flex items-center justify-center h-screen bg-gray-300 ">
       <TicTacToe />
     </div>
   );
 }
 
