"use client";

import { useState } from 'react';
import ContactModal from './ContactModal';

export default function ContactButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900 text-left"
            >
                お問い合わせ
            </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
