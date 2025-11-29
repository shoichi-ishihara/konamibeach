import Image from 'next/image';
import { ShieldCheck, Sparkles, Users } from 'lucide-react';
import { clsx } from 'clsx';

const features = [
    {
        name: '抜群の透明度',
        description:
            '水質調査でも高い評価を得ている、透き通るような青い海アクアブルー。シュノーケリングにも最適で、魚たちと一緒に泳ぐことができます。',
        icon: Sparkles,
        image: '/images/clear_water.png',
        reverse: false,
    },
    {
        name: '遠浅で安心',
        description:
            '波が穏やかで遠浅な地形のため、小さなお子様連れのご家族でも安心して海水浴をお楽しみいただけます。',
        icon: ShieldCheck,
        image: '/images/shallow_beach.png',
        reverse: true,
    },
    {
        name: 'ファミリーに人気',
        description:
            '穴場的なスポットで、混雑しすぎずゆったりとした時間を過ごせます。更衣室やシャワー、休憩所も完備しており、一日中快適に過ごせます。',
        icon: Users,
        image: '/images/family_fun.png',
        reverse: false,
    },
];

export default function BeachInfo() {
    return (
        <section id="beach" className="relative overflow-hidden bg-white py-24 sm:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-teal-100 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
                    <h2 className="text-base font-semibold leading-7 text-primary tracking-wide uppercase">Discover Kobama</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        小波の魅力
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        小波（こなみ）海水浴場は、その名の通り穏やかな波と、驚くほど美しい水質が自慢です。
                        都会の喧騒を離れ、自然豊かなこの場所でリラックスしたひとときをお過ごしください。
                    </p>
                </div>

                <div className="flex flex-col gap-16 lg:gap-32">
                    {features.map((feature, index) => (
                        <div
                            key={feature.name}
                            className={clsx(
                                "flex flex-col gap-8 lg:flex-row lg:items-center",
                                feature.reverse ? "lg:flex-row-reverse" : ""
                            )}
                        >
                            <div className="flex-1 relative group">
                                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] w-full">
                                    <Image
                                        src={feature.image}
                                        alt={feature.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                {/* Decorative element */}
                                <div className={clsx(
                                    "absolute -z-10 top-4 h-full w-full rounded-2xl bg-primary/10",
                                    feature.reverse ? "-left-4" : "-right-4"
                                )} />
                            </div>

                            <div className="flex-1 lg:px-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                        {feature.name}
                                    </h3>
                                </div>
                                <p className="text-lg leading-8 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
