import React, { useState } from 'react';
import dverxi from '../assets/dvexi2.svg';
import email from '../assets/email.png';

const Dverxiy = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Formni backendga jo'natish uchun ma'lumotlar tayyorlanadi
        const formData = {
            name,
            phone,
        };

        console.log('Form jo‘natildi:', formData);
        alert('Zayavka muvaffaqiyatli yuborildi!');

        // Ma'lumotlarni tozalash
        setName('');
        setPhone('');
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Background qismi */}
            <div
                className="flex items-center justify-center w-full h-screen"
                style={{
                    backgroundImage: `url(${dverxi})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </div>
            {/* Email qismi */}
            <div
                className="flex items-center justify-center h-screen"
                style={{
                    backgroundImage: `url(${email})`,
                    backgroundSize: '100% 70%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Kontent */}
                <div className="relative flex flex-col items-start justify-start p-6 right-52 text-start sm:p-8 lg:p-12">
                    <h2 className="text-3xl font-bold leading-snug sm:text-4xl lg:text-6xl text-custom-red">
                        Стань дилером <br />
                        на выгодных условиях
                    </h2>
                    <form onSubmit={handleSubmit} className="w-full mt-6">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full max-w-md px-4 py-2 mb-4 text-sm border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-custom-red"
                            type="text"
                            placeholder="Ваше имя"
                        />
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="block w-full max-w-md px-4 py-2 mb-4 text-sm border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-custom-red"
                            type="number"
                            placeholder="Телефон"
                        />
                        <span className="block max-w-md mb-4 text-xs leading-tight text-gray-500 sm:text-sm">
                            Нажимая на кнопку, вы даете согласие с Политикой конфиденциальности
                        </span>
                        <button
                            type="submit"
                            className="px-6 py-3 text-sm text-white bg-red-500 rounded-lg sm:text-base hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Отправить заявку
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dverxiy;
