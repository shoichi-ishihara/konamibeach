"use client";

import { Tent, Droplets, Flame, Car, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const facilities = [
    {
        name: 'フリーサイト',
        description: '海沿いの砂浜や松林の中にテントを張ることができます。波の音を聞きながらのキャンプは格別です。',
        icon: Tent,
    },
    {
        name: '炊事場・水道',
        description: '共同の炊事場があり、調理や洗い物が可能です。水は飲用可能です。',
        icon: Droplets,
    },
    {
        name: 'BBQ可',
        description: '直火は禁止ですが、コンロや焚き火台を使用すればBBQや焚き火を楽しめます。',
        icon: Flame,
    },
    {
        name: '駐車場',
        description: 'サイトのすぐ近くに駐車場があります。荷物の運び出しもスムーズです。',
        icon: Car,
    },
];

export default function CampingPage() {
    return (
        <div className="bg-white pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-8">
                    <Link href="/" className="flex items-center text-sm font-semibold text-primary hover:text-blue-600">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        ホームに戻る
                    </Link>
                </div>

                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary">Camping</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        小波キャンプ場
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        海まで徒歩0分。最高のロケーションでアウトドアを満喫しませんか？
                    </p>
                </div>

                {/* Facilities */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">設備情報</h3>
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {facilities.map((facility) => (
                            <div key={facility.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <facility.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {facility.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{facility.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Reservation & Calendar Section */}
                <div className="mt-24">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">予約状況・カレンダー</h3>
                            <p className="text-gray-600">
                                Googleカレンダーで最新の予約状況をご確認いただけます。<br />
                                空き状況をご確認の上、お電話またはフォームよりご予約ください。
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-4">
                            {/* Placeholder for Google Calendar Embed */}
                            <div className="aspect-[4/3] md:aspect-[16/9] w-full bg-gray-100 relative">
                                <iframe
                                    src="https://calendar.google.com/calendar/embed?src=ja.japanese%23holiday%40group.v.calendar.google.com&ctz=Asia%2FTokyo"
                                    style={{ border: 0 }}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    title="Google Calendar"
                                ></iframe>
                                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2 text-xs text-center text-gray-500">
                                    ※ これはサンプルのカレンダーです。実際の予約状況ではありません。
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-gray-600 mb-6">
                                ご希望の日程が空いている場合は、以下よりご予約ください。
                            </p>
                            <button className="rounded-full bg-accent px-10 py-4 text-lg font-bold text-gray-900 shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                予約フォームへ進む
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
