"use client";

import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudLightning, Wind } from 'lucide-react';

// Approximate coordinates for Konami Beach
const LAT = 35.58;
const LON = 133.01;

type WeatherData = {
    current_weather: {
        temperature: number;
        weathercode: number;
        windspeed: number;
    };
    daily: {
        time: string[];
        weathercode: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
    };
};

const getWeatherIcon = (code: number) => {
    if (code === 0 || code === 1) return <Sun className="h-8 w-8 text-orange-500" />;
    if (code === 2 || code === 3) return <Cloud className="h-8 w-8 text-gray-500" />;
    if (code >= 45 && code <= 48) return <Cloud className="h-8 w-8 text-gray-600" />;
    if (code >= 51 && code <= 67) return <CloudRain className="h-8 w-8 text-blue-500" />;
    if (code >= 80 && code <= 82) return <CloudRain className="h-8 w-8 text-blue-600" />;
    if (code >= 95) return <CloudLightning className="h-8 w-8 text-purple-500" />;
    return <Sun className="h-8 w-8 text-orange-500" />;
};

const getWeatherLabel = (code: number) => {
    if (code === 0) return '快晴';
    if (code === 1) return '晴れ';
    if (code === 2) return '一部曇り';
    if (code === 3) return '曇り';
    if (code >= 45 && code <= 48) return '霧';
    if (code >= 51 && code <= 67) return '雨';
    if (code >= 80 && code <= 82) return 'にわか雨';
    if (code >= 95) return '雷雨';
    return '晴れ';
};

export default function Weather() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&windspeed_unit=ms`
                );
                const data = await res.json();
                setWeather(data);
            } catch (error) {
                console.error('Failed to fetch weather:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) {
        return (
            <div id="weather" className="py-24 bg-blue-50 text-center">
                <p>天気を読み込み中...</p>
            </div>
        );
    }

    if (!weather) {
        return (
            <div id="weather" className="py-24 bg-blue-50 text-center">
                <p>天気の取得に失敗しました。</p>
            </div>
        );
    }

    return (
        <div id="weather" className="bg-blue-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-12">
                    <h2 className="text-base font-semibold leading-7 text-primary">天気予報</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        現在の天気と週間予報
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8">
                    {/* Current Weather */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 border-b border-gray-100 pb-12">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-500 mb-1">現在</p>
                            <div className="flex items-center gap-4">
                                {getWeatherIcon(weather.current_weather.weathercode)}
                                <span className="text-5xl font-bold text-gray-900">
                                    {Math.round(weather.current_weather.temperature)}°C
                                </span>
                            </div>
                            <p className="text-xl font-medium text-gray-700 mt-2">
                                {getWeatherLabel(weather.current_weather.weathercode)}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                            <Wind className="h-5 w-5" />
                            <span>風速 {weather.current_weather.windspeed} m/s</span>
                        </div>
                    </div>

                    {/* Daily Forecast */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {weather.daily.time.map((dateStr, index) => {
                            // Show only next 7 days (including today)
                            if (index > 6) return null;

                            const date = new Date(dateStr);
                            const dayName = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
                            const isToday = index === 0;

                            return (
                                <div
                                    key={dateStr}
                                    className={`flex flex-col items-center p-4 rounded-xl ${isToday ? 'bg-primary/5 ring-1 ring-primary/20' : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <p className={`text-sm font-medium mb-2 ${isToday ? 'text-primary' : 'text-gray-500'}`}>
                                        {isToday ? '今日' : `${date.getMonth() + 1}/${date.getDate()} (${dayName})`}
                                    </p>
                                    <div className="mb-2">
                                        {getWeatherIcon(weather.daily.weathercode[index])}
                                    </div>
                                    <div className="flex gap-2 text-sm">
                                        <span className="font-bold text-gray-900">
                                            {Math.round(weather.daily.temperature_2m_max[index])}°
                                        </span>
                                        <span className="text-gray-500">
                                            {Math.round(weather.daily.temperature_2m_min[index])}°
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
