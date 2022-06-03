import React from 'react'
import './Pieces.css'


export class Pieces extends React.Component{

    
    render(){
        switch(this.props.piece){
            case 'Pawn':
                if(this.props.side === 'White'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_plt60.png' alt='white pawn'></img>
                        </div>
                    )
                }
                else if (this.props.side === 'Black'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_pdt60.png' alt='black pawn'></img>
                        </div>
                    )
                }
                else{
                    return(<div><p>error</p></div>)
                }
            case 'Bishop':
                if(this.props.side === 'White'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_blt60.png' alt='white bishop'></img>
                        </div>
                    )
                }
                else if (this.props.side === 'Black'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_bdt60.png' alt='black bishop'></img>
                        </div>
                    )
                }
                else{
                    return(<div><p>error</p></div>)
                }
            case 'Queen':
                if(this.props.side === 'White'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_qlt60.png' alt='white queen'></img>
                        </div>
                    )
                }
                else if (this.props.side === 'Black'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_qdt60.png' alt='black queen'></img>
                        </div>
                    )
                }
                else{
                    return(<div><p>error</p></div>)
                }
            case 'Rook':
                if(this.props.side === 'White'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_rlt60.png' alt='white rook'></img>
                        </div>
                    )
                }
                else if (this.props.side === 'Black'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_rdt60.png' alt='black rook'></img>
                        </div>
                    )
                }
                else{
                    return(<div><p>error</p></div>)
                }
                
            case 'King':
                if(this.props.side === 'White'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_klt60.png' alt='white King'></img>
                        </div>
                    )
                }
                else if (this.props.side === 'Black'){
                    return(
                        <div coordinates = {[this.props.i, this.props.j]}>
                            <img src='chess_pieces/Chess_kdt60.png' alt='black King'></img>
                        </div>
                    )
                }
                else{
                    return(<div><p>error</p></div>)
                }
                   
            case 'Knight':
            if(this.props.side === 'White'){
                return(
                    <div coordinates = {[this.props.i, this.props.j]}>
                        <img src='chess_pieces/Chess_nlt60.png' alt='white knight'></img>
                    </div>
                )
            }
            else if (this.props.side === 'Black'){
                return(
                    <div coordinates = {[this.props.i, this.props.j]}>
                        <img src='chess_pieces/Chess_ndt60.png' alt='black knight'></img>
                    </div>
                )
            }
            else{
                return(<div><p>error</p></div>)
            }
            default:
                return(
                    <div>
                        <p>no piece</p>
                    </div>
                )
            
        }

    }
}