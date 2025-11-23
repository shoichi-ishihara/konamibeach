import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                    alt="Beautiful beach"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
            </div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-white/50 hover:ring-white/80 transition-all">
                        2025年度の海開きは7月上旬予定です{' '}
                        <Link href="/#weather" className="font-semibold text-accent">
                            <span className="absolute inset-0" aria-hidden="true" />
                            天気をチェック <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
                    小波海水浴場
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100 drop-shadow-md">
                    島根県松江市島根町にある、透明度抜群のプライベートビーチのような空間。<br />
                    遠浅で波も穏やか、ご家族連れでも安心してお楽しみいただけます。
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/camping"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all transform hover:scale-105"
                    >
                        キャンプ場を予約
                    </Link>
                    <Link href="/#access" className="text-sm font-semibold leading-6 text-white hover:text-accent transition-colors">
                        アクセス <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
