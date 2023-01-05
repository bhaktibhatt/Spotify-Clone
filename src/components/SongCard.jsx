import React,{Component} from "react";
import { CgPlayButtonO } from "react-icons/cg";

export class SongCard extends Component{
    render(){
        return(
            <div className="flex items-center justify-center">
                <div className="h-80 w-1/4 bg-gray z-10 rounded-2xl flex flex-col items-center">
                   <img src="https://a10.gaanacdn.com/gn_img/albums/oAJbDElKnL/AJbD9VrDKn/size_m.webp" className="h-44 w-44 rounded-2xl mt-2" alt="heartbeat_btsWorld.jpg" /> 
                   <div className="mt-14">
                    <CgPlayButtonO className="h-10 w-10"/>
                   </div>
                </div>
            </div>
        )
    }
}