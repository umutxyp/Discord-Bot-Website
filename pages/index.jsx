import Link from "next/link";
import Image from "next/image";

export default function Index() {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
                <p className="animateHeader text-4xl font-extrabold text-center text-white">
                    DD Master
                </p>
                <p className="animateHeader text-white text-opacity-50 text-center mt-5">
                    DD Master is your multi-purpose Discord bot designed for fun, entertainment, and utility. With DD Master features, you can go mining, try your luck at gambling, play mini-games, and much more!
                </p>
                <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
                    <Link href={"https://discord.com/oauth2/authorize?client_id=1255576744577208401"}>
                        <a
                            className={
                                "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"
                            }
                        >
                            Invite DD Master
                        </a>
                    </Link>
                </div>
            </div>

            <div className="hidden fixed top-0 left-0 w-full h-full z-0 undrag pointer-events-none grayscale xl:block undrag opacity-10 flex-shrink-0 rotate-[1deg]">
                <Image
                    src="/img/gift-left.jpg"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
        </>
    );
}
