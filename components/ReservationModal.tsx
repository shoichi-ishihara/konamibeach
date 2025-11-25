"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    const [formData, setFormData] = useState({
        nameKanji: '',
        nameKana: '',
        address: '',
        phone: '',
        email: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send reservation');
            }

            setSubmitStatus('success');
            setTimeout(() => {
                onClose();
                setSubmitStatus('idle');
                setFormData({
                    nameKanji: '',
                    nameKana: '',
                    address: '',
                    phone: '',
                    email: '',
                });
            }, 2000);
        } catch (error) {
            console.error('Error submitting reservation:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" onClick={onClose} aria-hidden="true" />

            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        onClick={onClose}
                    >
                        <span className="sr-only">Close</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                            キャンプ場予約フォーム
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                以下の情報を入力して予約リクエストを送信してください。
                            </p>
                        </div>

                        {submitStatus === 'success' ? (
                            <div className="mt-6 rounded-md bg-green-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-green-800">送信完了</h3>
                                        <div className="mt-2 text-sm text-green-700">
                                            <p>ご予約ありがとうございます。確認メールをお送りしました。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
                                <div>
                                    <label htmlFor="nameKanji" className="block text-base font-medium leading-6 text-gray-900">
                                        お名前 (漢字) <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="nameKanji"
                                            id="nameKanji"
                                            required
                                            value={formData.nameKanji}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-base sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="nameKana" className="block text-base font-medium leading-6 text-gray-900">
                                        お名前 (カナ) <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="nameKana"
                                            id="nameKana"
                                            required
                                            value={formData.nameKana}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-base sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-base font-medium leading-6 text-gray-900">
                                        住所 <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-base sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-base font-medium leading-6 text-gray-900">
                                        電話番号 <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-base sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                                        メールアドレス <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-base sm:leading-6"
                                        />
                                    </div>
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="text-red-600 text-sm">
                                        送信に失敗しました。時間をおいて再度お試しください。
                                    </div>
                                )}

                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex w-full justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto disabled:opacity-50"
                                    >
                                        {isSubmitting ? '送信中...' : '送信する'}
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={onClose}
                                    >
                                        キャンセル
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
