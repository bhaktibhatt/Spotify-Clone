import React,{Component} from "react";
import { SongCard } from "./SongCard";
export class Home extends Component {
    render(){
        return(
            <div className="w-screen h-screen flex items-center justify-end">
                <div className="w-screen h-screen ml-80 pt-20 px-2 bg-gradient-to-b from-gray-1 to-black text-white">
                <SongCard/>
                </div>
            </div>
        )
    }
}