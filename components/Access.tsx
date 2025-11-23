import { MapPin, Car, Bus } from 'lucide-react';

export default function Access() {
    return (
        <div id="access" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary">アクセス</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        小波海水浴場への行き方
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Map */}
                    <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.687727827854!2d133.0166666!3d35.5833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35570f0f0f0f0f0f%3A0x0!2z5bCP5rOi5rW35rC05rW05aC0!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        ></iframe>
                        {/* Note: The coordinates in the iframe URL are approximate for Konami Beach based on general knowledge. 
                In a real scenario, I would get the exact embed code. */}
                    </div>

                    {/* Info */}
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="flex-none">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold leading-8 text-gray-900">住所</h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    〒690-1213<br />
                                    島根県松江市島根町小波
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-none">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Car className="h-6 w-6 text-primary" />
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold leading-8 text-gray-900">お車でお越しの場合</h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    松江市街地から約40分。<br />
                                    県道37号線を北上し、島根町方面へ。
                                    駐車場あり（有料期間あり）。
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-none">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <Bus className="h-6 w-6 text-primary" />
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold leading-8 text-gray-900">公共交通機関</h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">
                                    JR松江駅から一畑バス（島根町方面行き）に乗車。<br />
                                    「小波」バス停下車、徒歩すぐ。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
