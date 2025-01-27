import React, { useEffect, useState } from 'react';

// select ui 

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://etadoor.koyeb.app/api/doors?page=0&size=20', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            console.log(data); // Bu yerda javobni tekshiring
            setProducts(data.data.content); // API formatiga mos bo'lsa
            setLoading(false);
        } catch (error) {
            console.error('API xatolik:', error);
            setLoading(false);
        }
    };
    

    const ProductCard = ({ product }) => (
        <div className="w-[330px] h-[483px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative h-[240px]">
                {product.images.length > 0 ? (
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">Rasm mavjud emas</p>
                    </div>
                )}
                <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            New
                        </span>
                    )}
                    {product.isDiscounted && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Chegirma
                        </span>
                    )}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                        {product.name}
                    </h2>
                    <p className="text-2xl font-bold text-[#a78b5a]">
                        {product.finalPrice} р.
                    </p>
                </div>
                <button className="w-full bg-[#a78b5a] hover:bg-[#8f7048] text-white py-3 px-6 rounded-lg transition-colors duration-300 font-medium mt-4">
                    Заказать
                </button>
            </div>
        </div>
    );

    return (
        <div className=" min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
                    Наши двери
                </h1>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#a78b5a] border-t-transparent"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-5 justify-items-center">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
