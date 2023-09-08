import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-5xl mx-auto">
                <div className="items-center cursor-pointer hover:bg-red-100 duration-200 px-3 py-4 inline-flex">
                    <Image className="rounded-full" src="/avatar.jpg" alt="avatar" width={36} height={36} />
                    <span className='ml-3 font-bold'>Header</span>
                </div>
            </div>
        </header>
    )
}