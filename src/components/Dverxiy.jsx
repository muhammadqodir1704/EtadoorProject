import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import email from "../assets/email.png";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Dverxiy = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("Dealers").insert([{ name, phone }]);

    if (error) {
      console.error("Xatolik:", error.message);
      alert("Xatolik yuz berdi, iltimos qaytadan urinib ko'ring.");
    } else {
      console.log("Muvaffaqiyatli saqlandi:", data);
      alert("Zayavka muvaffaqiyatli yuborildi!");
      setName("");
      setPhone("");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="flex items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${email})`,
          backgroundSize: "100% 70%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="relative flex flex-col items-start justify-start p-6 right-52 text-start sm:p-8 lg:p-12">
          <h2 className="text-3xl font-bold leading-snug sm:text-4xl lg:text-6xl text-custom-red font-noto-sans-georgian">
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
              required
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full max-w-md px-4 py-2 mb-4 text-sm border border-gray-300 rounded-lg sm:text-base focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-custom-red"
              type="tel"
              placeholder="Телефон"
              required
            />
            <span className="block max-w-md mb-4 text-xs leading-tight text-gray-600 sm:text-sm">
              Нажимая на кнопку, вы даете согласие с Политикой конфиденциальности
            </span>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 text-sm text-white rounded-lg sm:text-base focus:outline-none focus:ring-2 ${
                loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-600 focus:ring-red-400"
              }`}>
              {loading ? "Yuborilmoqda..." : "Отправить заявку"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dverxiy;
