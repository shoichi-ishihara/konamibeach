import Link from 'next/link';
import { Waves } from 'lucide-react';
import ContactButton from './ContactButton';

export default function Footer() {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <Waves className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold text-primary">小波海水浴場</span>
                        </Link>
                        <p className="text-sm leading-6 text-gray-600">
                            島根県松江市島根町小波<br />
                            美しい海と自然に囲まれた、家族のための海水浴場。
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">コンテンツ</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/#beach" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            海水浴場について
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#camping" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            キャンプ場
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#access" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            アクセス
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#weather" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            天気予報
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">予約・お問い合わせ</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/camping" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                            キャンプ場予約
                                        </Link>
                                    </li>
                                    <li>
                                        <ContactButton />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">&copy; 2025 Konami Beach. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
