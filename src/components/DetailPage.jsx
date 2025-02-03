import React from 'react'
import { useParams } from "react-router-dom";
const DetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
      return <h2 className="text-center text-xl text-red-600">Mahsulot topilmadi</h2>;
  }
  return (
    <div className=" max-w-6xl mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mahsulot Rasmi */}
        <div className="relative">
            <img src={product.images[0]} alt={product.name} className="w-full rounded-lg shadow-md" />
            <div className="absolute top-4 left-4 flex gap-2">
                {product.isNew && <span className="bg-red-600 text-white px-3 py-1 rounded-full">New</span>}
                {product.isDiscounted && <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">Chegirma</span>}
            </div>
        </div>

        {/* Mahsulot Ma'lumotlari */}
        <div>
            <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.description}</p>

            {/* Narx */}
            <div className="mt-4">
                <span className="text-2xl font-bold text-[#a78b5a]">{product.finalPrice} р.</span>
                {product.isDiscounted && (
                    <span className="text-gray-500 line-through ml-4">{product.originalPrice} р.</span>
                )}
            </div>

            {/* Variantlar */}
            <div className="mt-4">
                <h3 className="font-medium text-gray-700">O'lcham:</h3>
                <div className="flex gap-3 mt-2">
                    {product.sizes.map((size) => (
                        <button key={size} className="px-4 py-2 border rounded-md hover:bg-gray-200">{size}</button>
                    ))}
                </div>
            </div>

            {/* Rang tanlash */}
            <div className="mt-4">
                <h3 className="font-medium text-gray-700">Rang:</h3>
                <div className="flex gap-3 mt-2">
                    {product.colors.map((color) => (
                        <span key={color} className={`w-8 h-8 rounded-full border border-gray-300`} style={{ backgroundColor: color }}></span>
                    ))}
                </div>
            </div>

            {/* Buyurtma tugmalari */}
            <div className="mt-6 flex gap-4">
                <button className="bg-[#a78b5a] hover:bg-[#8f7048] text-white py-3 px-6 rounded-lg transition-all">
                    Заказать
                </button>
                <button className="border border-gray-400 py-3 px-6 rounded-lg hover:bg-gray-100 transition-all">
                    Запросить прайс-лист
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default DetailPage
