import React from 'react'
import './Chessboard.css'
import {Tile} from '../Tile/Tile.js'


export class Chessboard extends React.Component{
    
    render(){

        let board = [];
       
        
        for (let i = 8; i > 0; i--){
            for(let j = 0; j < 8; j++){
                let compare = i + j +2
                
                board.push(
                    <Tile number={compare} i = {i} j = {j}></Tile>
                )
               
            }
        }

        
        return <div id='chessboard'>
        {board}
        
        </div>
    }
}

