import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'antd'
import img1 from '../assets/nashi1.jpg'
import img2 from '../assets/nashi2.jpg'
import img3 from '../assets/nashi3.jpg'
import img4 from '../assets/nashi4.jpeg'
import img5 from '../assets/nashi5.jpg'
import img6 from '../assets/nashi6.jpg'
import img7 from '../assets/nashi7.webp'
import img8 from '../assets/nashi8.jpg'
import img9 from '../assets/nashi9.jpg'
import img10 from '../assets/nashi10.jpg'
import img11 from '../assets/nashi11.jpg'

const Okampani = () => {
  const colums = [
    { img: img1, title: 'ТК Ивеко Московская область' },
    { img: img2, title: 'Сыроварня Олега Сироты г. Истра, Московская область' },
    { img: img3, title: 'Администрация г. Калининград' },
    { img: img4, title: 'Производственное предприятие г. Омск' },
    { img: img5, title: 'Детский центр г. Челябинск' },
    { img: img6, title: 'АЗС «Роснефть» Московская область' },
    { img: img7, title: 'Частная медицинская клиника г. Москва' },
    { img: img8, title: 'Медучреждение г. Вологда' },
    { img: img9, title: 'Офис компании «Геопром» Московская область' },
    { img: img10, title: 'Торговый центр г. Мурманск' },
    { img: img11, title: 'Клиника «Деломедика» г. Раменское' },
    { img: img6, title: 'АЗС «Роснефть» Московская область' },
  ]

  return (
    <div className='container min-h-screen p-6 mx-auto'>
      <div className="mb-6">
        <Link to="/" className="text-blue-500 hover:underline">Главная</Link> /
        <Link to="/o-kompanii" className="ml-1 text-gray-500 hover:underline">
          Наши работы
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {colums.map((item, index) => (
          <div
            key={index}
            className="p-4 overflow-hidden transition duration-300 transform hover:scale-105"
          >
            <Image
              width="100%"
              src={item.img}
              alt={item.title}
              className="object-cover"
            />
            <div className="mt-2">
              <p className="text-lg font-semibold text-gray-700">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Okampani
