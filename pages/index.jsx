import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/bck.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          MusicMaker
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       How about moderating your own server with MusicMaker? Create your own free world and create your own playlist, experience this pleasure with the best sounds. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/api/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=applications.commands%20bot"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite MusicMaker
              </a>
              </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"MusicMaker" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about creating the best environment to relax yourself with your own emotions?" }}/>
            <a href="https://discord.com/api/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=bot%20applications.commands" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite MusicMaker
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimization</p>
                  <p className="text-gray-500 line-clamp-4">With fast and customizable settings specific to your server, MusicMaker gives you a musical pleasure to the fullest.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Universal</p>
                  <p className="text-gray-500 line-clamp-4">A bot that supports multi-platform music playback. (Spotify, Souncloud, YouTube) | (It is a bot that complies with all copyrights and licenses.)</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Security</p>
                  <p className="text-gray-500 line-clamp-4">An open source safe bot that you can browse and help us develop.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Support</p>
                  <p className="text-gray-500 line-clamp-4">With our best teammates, we provide the fastest response to anyone who needs help.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://media.discordapp.net/attachments/737347015251460156/1313966525111074836/image.png?ex=67520e2f&is=6750bcaf&hm=42cac37cae7dbf90e6a5e0804fcfaf0575adbdec3a14078fb2597caa9f0c5033&=&format=webp&quality=lossless&width=687&height=421"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Best Your Bot</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Are you ready to throw the best parties with MusicMaker, the best and most up-to-date bot?</p>
                </div>
                <img src="https://media.discordapp.net/attachments/737347015251460156/1313966525111074836/image.png?ex=67520e2f&is=6750bcaf&hm=42cac37cae7dbf90e6a5e0804fcfaf0575adbdec3a14078fb2597caa9f0c5033&=&format=webp&quality=lossless&width=687&height=421" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
