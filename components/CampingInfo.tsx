import Link from 'next/link';
import Image from 'next/image';
import { Tent, Flame, Star } from 'lucide-react';
import { clsx } from 'clsx';

const features = [
    {
        name: 'フリーサイト',
        description:
            'ビーチのすぐそばにテントを張れるフリーサイト。波の音をBGMに、最高のロケーションでキャンプを楽しめます。',
        icon: Tent,
        image: '/images/camping_tent.png',
        reverse: false,
    },
    {
        name: 'BBQ可能',
        description:
            '海を見ながらのバーベキューは格別です。食材や機材を持ち込んで、家族や友人と楽しい食事の時間を過ごせます。直火は禁止ですのでコンロをご使用ください。',
        icon: Flame,
        image: '/images/bbq_time.png',
        reverse: true,
    },
    {
        name: '満天の星空',
        description:
            '街の明かりが少ないため、夜には満天の星空が広がります。波音を聞きながら星を眺める、贅沢な時間をお過ごしください。',
        icon: Star,
        image: '/images/star_gazing.png',
        reverse: false,
    },
];

export default function CampingInfo() {
    return (
        <section id="camping" className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-100 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-yellow-100 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
                    <h2 className="text-base font-semibold leading-7 text-primary tracking-wide uppercase">Experience Nature</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        海辺でキャンプ
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        波の音をBGMに、満天の星空の下でキャンプを楽しみませんか？
                        ビーチのすぐそばにキャンプサイトがあり、朝起きたらすぐに海へ飛び込めます。
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/camping"
                            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            設備・予約状況を確認する <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
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
                                    "absolute -z-10 top-4 h-full w-full rounded-2xl bg-orange-200/20",
                                    feature.reverse ? "-left-4" : "-right-4"
                                )} />
                            </div>

                            <div className="flex-1 lg:px-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
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
