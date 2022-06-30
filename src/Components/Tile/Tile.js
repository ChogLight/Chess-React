import { React, useEffect, useState } from 'react'
import './Tile.css'
import {Pieces} from '../Pieces/Pieces'



export const Tile = (props) => {


    const [position,setPosition] = useState({
        i : 1,
        j : 4
    })


    const movePiece = () =>{
        setPosition(
            {
                i: position.i + 1,
                j: position.j
            }
        )
    }


    let pieces = [];
    /*for(let i = 0; i < 8; i++){
        pieces.push(<Pieces  key = {`Pawn W${i}`} i = {2} j = {i} piece = 'Pawn' side = 'White' ></Pieces>) 
    }
    for(let i = 0; i < 8; i++){
        pieces.push(<Pieces key = {`Pawn B${i}`} i = {7} j = {i} piece = 'Pawn' side = 'Black' ></Pieces>) 
    }
    pieces.push(<Pieces key = {`Rook B1`} i = {8} j = {0} piece = 'Rook' side = 'Black' ></Pieces>) 
    pieces.push(<Pieces key = {`Rook B2`} i = {8} j = {7} piece = 'Rook' side = 'Black' ></Pieces>)
    pieces.push(<Pieces key = {`Knight B1`} i = {8} j = {6} piece = 'Knight' side = 'Black' ></Pieces>)
    pieces.push(<Pieces key = {`Knight B2`} i = {8} j = {1} piece = 'Knight' side = 'Black' ></Pieces>)
    pieces.push(<Pieces key = {`Bishop B1`} i = {8} j = {5} piece = 'Bishop' side = 'Black' ></Pieces>)
    pieces.push(<Pieces key = {`Bishop B2`} i = {8} j = {2} piece = 'Bishop' side = 'Black' ></Pieces>)
    pieces.push(<Pieces key = {`Queen B1`} i = {8} j = {3} piece = 'Queen' side = 'Black' ></Pieces>)
    pieces.push(<Pieces key = {`King B1`} i = {8} j = {4} piece = 'King' side = 'Black' ></Pieces>)
    pieces.push(<Pieces key = {`Rook W1`} i = {1} j = {0} piece = 'Rook' side = 'White' ></Pieces>) 
    pieces.push(<Pieces key = {`Rook W2`} i = {1} j = {7} piece = 'Rook' side = 'White' ></Pieces>)
    pieces.push(<Pieces key = {`Knight W1`} i = {1} j = {6} piece = 'Knight' side = 'White' ></Pieces>)
    pieces.push(<Pieces key = {`Knight W2`} i = {1} j = {1} piece = 'Knight' side = 'White' ></Pieces>)
    pieces.push(<Pieces key = {`Bishop W1`} i = {1} j = {5} piece = 'Bishop' side = 'White' ></Pieces>)
    pieces.push(<Pieces key = {`Bishop W2`} i = {1} j = {2} piece = 'Bishop' side = 'White' ></Pieces>)
    pieces.push(<Pieces key = {`Queen W1`} i = {1} j = {3} piece = 'Queen' side = 'White' ></Pieces>)*/
    pieces.push(<Pieces onClick = {movePiece} key = {`King W1`} i = {position.i} j = {position.j} piece = 'King' side = 'White' ></Pieces>)     
    if(props.number % 2 ===0){
        return (
        <div coordinate = {[props.i, props.j]} className="tile white_tile">
             {pieces.map((piece)=>{
                    if(props.i === piece.props.i && props.j === piece.props.j){
                        return piece
                    }
                    else{
                        return ''
                        
                    }
                })}
        </div>
        )
    }
    else{
        return (
        <div coordinate = {[props.i, props.j]} className = "tile black_tile">
             {pieces.map((piece)=>{
                    if(props.i === piece.props.i && props.j === piece.props.j){
                        return piece
                    }
                    else{
                        return ''
                    }
                })}
        </div>
        )
    }
}

