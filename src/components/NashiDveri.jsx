import React from 'react'
import ImgOne from "../Images/ImgOne.svg";
import ImgTwo from "../Images/ImgTwo.svg";
import ImgThree from "../Images/ImgThree.svg";
import ImgFourth from "../Images/ImgFourth.svg";
import ImgFifth from "../Images/ImgFifth.svg";
import ImgSixth from "../Images/ImgSixth.svg";
import ImgSeven from "../Images/ImgSeven.svg";
import ImgEight from "../Images/ImgEight.svg";
import ImgNine from "../Images/ImgNine.svg";
const NashiDveri = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1 style={{
        fontSize: 34,
        marginTop: '100px',
        marginBottom: '50px',
      }} className='flex align-items-center justify-center'>
        Наши двери применяют
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Row 1 */}
        <div>
          <img className="w-full h-auto object-cover" src={ImgOne} alt="door 1" />
        </div>
        <div>
          <img className="w-full h-auto object-cover" src={ImgTwo} alt="door 2" />
        </div>
        <div>
          <img className="w-full h-auto object-cover" src={ImgThree} alt="door 3" />
        </div>

        {/* Row 2 */}
        <div>
          <img className="w-full h-auto object-cover" src={ImgFourth} alt="door 4" />
        </div>
        <div>
          <img className="w-full h-auto object-cover" src={ImgFifth} alt="door 5" />
        </div>
        <div>
          <img className="w-full h-auto object-cover" src={ImgSixth} alt="door 6" />
        </div>

        {/* Row 3 */}
        <div>
          <img className="w-full h-auto object-cover" src={ImgSeven} alt="door 7" />
        </div>
        <div>
          <img className="w-full h-auto object-cover" src={ImgEight} alt="door 8" />
        </div>
        <div>
          <img className="w-full h-auto object-cover" src={ImgNine} alt="door 9" />
        </div>
      </div>
    </div>
  )
}

export default NashiDveri
