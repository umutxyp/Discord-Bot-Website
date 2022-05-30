import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const ErrorPage = ({ code, message }) => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    
    return <>
        <Head>
            <title>{code} | Astra Bot</title>
        </Head>

        <div className="max-w-7xl text-center py-20 mx-auto">
        <div className="flex w-full justify-center">
      <img width="400" src="/img/bck3.png" />
      </div>
            <h1 className="text-4xl font-extrabold text-white">{code}</h1>
            <p className="text-xl font-thin text-white text-opacity-75">{message}</p>
            <button
                className="w-42 shadow-lg mt-2 shadow-amber-600/20 rounded-xl py-2 font-medium px-7 text-zinc-900 bg-amber-400 hover:bg-opacity-50 transition duration-200"
                onClick={() => {
                    setClicked(true);
                    router.back();
                }}
            >
                {clicked ? <i className="fad fa-spinner-third fa-spin text-white" /> : <><i className='fa fa-arrow-left mr-2' />Go Back</>}
            </button>
        </div>
    </>
}

export default ErrorPage;
