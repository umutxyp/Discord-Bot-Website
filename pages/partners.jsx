
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/6XGqdgE">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/676124992919830548/68ef946cf7cc39e4063eed4d446f6dda.webp" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Code Share</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                        Share Your Codes, Can You Keep Your Projects Active Forever. World's Largest Website with Discord Interface!
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://discord.gg/Fy4WmSThRZ">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/924312493537509407/721de16575a9048c9c6980613ebb99f0.webp" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">The Developers</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    You can get help on software and similar issues or you can spend time chatting. How about being a cool developer?
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};