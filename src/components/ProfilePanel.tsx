import Image from "next/image";
import { Fav } from "./Fav";

export default function ProfilePanel() {
    return <div className="flex justify-center"><div className="max-w-3xl mt-12 mx-12 bg-white shadow md:flex gap-16 p-4 rounded-lg">
        <div className="ml-8 mt-8 md:w-60 md:h-60 w-full h-full md:rounded-full overflow-hidden">
            <Image className="w-full h-full" src="/avatar.jpg" alt="tomo0611's avatar" width={240} height={240} />
        </div>
        <div>
            <h2 className="text-3xl text-pink-400 mt-2">tomo0611</h2>

            <div className="whitespace-pre-line">

                <p className='text-sm mt-4'>
                    所属
                </p>
                <p>大阪公立大学 工学部 情報工学科 B2 (学部2年)</p>

                <p className='text-sm mt-4'>
                    分野
                </p>
                <p>Web系 / Ubuntu / Androidアプリ開発</p>

                <p className='text-sm mt-4'>
                    趣味
                </p>
                <p>プログラミング / アニメ</p>

                <div className="flex flex-row flex-wrap justify-center mx-[-2rem] my-3">
                    <Fav navLinks={[
                        { name: 'Twitter', href: 'https://twitter.com/tomo0611_dev', icon: 'twitter' },
                        { name: 'GitHub', href: 'https://github.com/tomo0611', icon: 'github' },
                        { name: 'Instagram', href: 'https://www.instagram.com/tomo06.11/', icon: 'instagram' },
                        { name: 'Zenn', href: 'https://zenn.dev/tomo0611', icon: 'zenn' },
                    ]} />
                </div>

                <div className='mt-2 mb-1'>
                    <p>ボクとお友達になりませんか？</p>
                    <p>Twitterやインスタでおはなししたいな、、 </p>
                </div>
            </div>
        </div>
    </div>
    </div>
}