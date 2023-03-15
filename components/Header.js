import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from 'next/image'
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;
        router.push(`/search?term=${term}`);
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image src={'https://logos.textgiraffe.com/logos/logo-name/33358183-designstyle-pastel-s.png'} height={40} width={120} className="cursor-pointer" alt="Profile" onClick={()=>router.push("/")}/>
                <form className="flex-grow flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none" defaultValue={router.query.term} />
                    <XIcon height={23} className="h-7 sm:mr-3 cursor-pointer icon transiton duration-100 transform hover:scale-125 text-gray-500" onClick={()=> (searchInputRef.current.value="")}/>
                    <SearchIcon height={27} className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 transiton duration-100 transform hover:scale-125" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar url="https://i.pinimg.com/564x/73/af/0c/73af0c0389795511117949da29f3079c.jpg"/>
            </div>
            <HeaderOptions />
        </header>
    );
}

export default Header





// function Header() {
//     const router = useRouter();
//     const searchInputRef = useRef(null);
//     const search = e => {
//         e.preventDefault();
//         const term = searchInputRef.current.value;

//         if (!term) return;
//         router.push(`/search/term=${term}`);
//     }

//     return (
//         <header className="sticky top-0 bg-white">
//             <div className="flex w-full p-6 items-center">
//                 <Image src={'https://logos.textgiraffe.com/logos/logo-name/33358183-designstyle-pastel-s.png'} height={40} width={120} className="cursor-pointer" onClick={() => router.push("/")} />
//                 <form className="form flex-grow">
//                     <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
//                     <XIcon height={23} className="h-7 sm:mr-3 cursor-pointer icon" onClick={() => (searchInputRef.current.value = "")} />
//                     <SearchIcon height={27} className="search cursor-pointer" />
//                     <button hidden type="submit" onClick={search}></button>
//                 </form>
//                 <Avatar url="https://i.pinimg.com/564x/73/af/0c/73af0c0389795511117949da29f3079c.jpg"/>
//             </div>
//             <HeaderOptions/>
//         </header>
//     );
// }

// export default Header
