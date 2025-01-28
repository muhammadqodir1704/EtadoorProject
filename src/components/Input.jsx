const Input = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center mt-12 space-y-8 md:space-y-0 md:space-x-8 px-4 bg-gray-900 py-10">
        <div className="text-center max-w-lg">
          <h1 className="text-red-500 mb-4">Запросить прайс-лист</h1>
          <p className="text-gray-300 mb-6 text-xl font-semibold">
            Оставьте свои контакты <br /> и мы вышлем вам наш прайс-лист
          </p>
        </div>
        <form className="w-full max-w-md space-y-6">
          <input
            type="text"
            placeholder="Ваше имя"
            aria-label="Ваше имя"
            className="w-full font-semibold text-center px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Телефон*"
              aria-label="Телефон"
              className="w-full md:w-1/2 font-semibold text-center px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email*"
              aria-label="Email"
              className="w-full md:w-1/2 font-semibold text-center px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="font-semibold text-sm text-gray-400 text-center">
              Нажимая на кнопку, вы даете согласие с Политикой
              конфиденциальности
            </p>
            <button
              type="submit"
              className="py-3 px-6 font-semibold bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;
