import React,{Component} from "react";
export class Home extends Component {
    render(){
        return(
            <div className=" w-4/5 h-screen px-10 bg-gradient-to-b from-gray-1 to-black absolute right-0 -z-10 text-white">
                    <nav className="h-16 flex items-center justify-between">
                        <div className="flex">
                            <div className="h-8 w-8 mr-2 bg-gray-2 rounded-full flex items-center justify-center">
                            <svg role="img" fill="currentcolor" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24" data-encore-id="icon"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>
                            </div>
                            <div className="h-8 w-8 bg-gray-2 rounded-full flex items-center justify-center">
                            <svg role="img" fill="currentcolor" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24" data-encore-id="icon"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="h-8 w-24 border-0.01 border-solid border-white rounded-2xl">Upgrade</button>
                            <button className="h-8 w-16 border-0.01 border-solid ml-9 border-white rounded-2xl">BB </button>
                        </div>
                    </nav>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, a nesciunt esse reiciendis architecto nobis dolor consectetur ut quibusdam quasi nostrum tempore harum eum exercitationem adipisci corporis ipsam optio veniam?
                </div>
            </div>
        )
    }
}