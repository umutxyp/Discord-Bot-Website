
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
            <a href="https://codeshare.me">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://images-ext-1.discordapp.net/external/YYXCkfsbbSARvGEzBx8W_3gt7ITp4f8YB_2y14SpoiA/%3Fsize%3D4096/https/cdn.discordapp.com/icons/676124992919830548/256b9dd9a6109b1c85ca64677f84f80a.png?format=webp&quality=lossless&width=160&height=160" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Code Share</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Code Share, it offers an ideal platform for developers to share their projects, interact with other developers and sell their projects for money, exploring many projects in different categories and software languages.
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
