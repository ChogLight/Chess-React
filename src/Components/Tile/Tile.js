import React from 'react'
import './Tile.css'
import {Pieces} from '../Pieces/Pieces'
export class Tile extends React.Component{

    render(){
        let pieces = [];
        for(let i = 0; i < 8; i++){
            pieces.push(<Pieces i = {2} j = {i} piece = 'Pawn' side = 'White' ></Pieces>) 
        }
        for(let i = 0; i < 8; i++){
            pieces.push(<Pieces i = {7} j = {i} piece = 'Pawn' side = 'Black' ></Pieces>) 
        }
        pieces.push(<Pieces i = {8} j = {0} piece = 'Rook' side = 'Black' ></Pieces>) 
        pieces.push(<Pieces i = {8} j = {7} piece = 'Rook' side = 'Black' ></Pieces>)
        pieces.push(<Pieces i = {8} j = {6} piece = 'Knight' side = 'Black' ></Pieces>)
        pieces.push(<Pieces i = {8} j = {1} piece = 'Knight' side = 'Black' ></Pieces>)
        pieces.push(<Pieces i = {8} j = {5} piece = 'Bishop' side = 'Black' ></Pieces>)
        pieces.push(<Pieces i = {8} j = {2} piece = 'Bishop' side = 'Black' ></Pieces>)
        pieces.push(<Pieces i = {8} j = {3} piece = 'Queen' side = 'Black' ></Pieces>)
        pieces.push(<Pieces i = {8} j = {4} piece = 'King' side = 'Black' ></Pieces>)
        pieces.push(<Pieces i = {1} j = {0} piece = 'Rook' side = 'White' ></Pieces>) 
        pieces.push(<Pieces i = {1} j = {7} piece = 'Rook' side = 'White' ></Pieces>)
        pieces.push(<Pieces i = {1} j = {6} piece = 'Knight' side = 'White' ></Pieces>)
        pieces.push(<Pieces i = {1} j = {1} piece = 'Knight' side = 'White' ></Pieces>)
        pieces.push(<Pieces i = {1} j = {5} piece = 'Bishop' side = 'White' ></Pieces>)
        pieces.push(<Pieces i = {1} j = {2} piece = 'Bishop' side = 'White' ></Pieces>)
        pieces.push(<Pieces i = {1} j = {3} piece = 'Queen' side = 'White' ></Pieces>)
        pieces.push(<Pieces i = {1} j = {4} piece = 'King' side = 'White' ></Pieces>)     
        if(this.props.number % 2 ===0){
            return (
            <div coordinate = {[this.props.i, this.props.j]} className="tile white_tile">
                {pieces.map((piece)=>{
                    if(this.props.i === piece.props.i && this.props.j === piece.props.j){
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
            <div coordinate = {[this.props.i, this.props.j]} className = "tile black_tile">
                 {pieces.map((piece)=>{
                    if(this.props.i === piece.props.i && this.props.j === piece.props.j){
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
}