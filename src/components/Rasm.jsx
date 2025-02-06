import meditsinas from "../Images/meditsina.svg";
import maktabs from "../Images/maktab.svg";
import sports from "../Images/sport.svg";
import xostels from "../Images/xostel.svg";
import ofiss from "../Images/ofis.svg";
import restorans from "../Images/restoran.svg";
import aeraports from "../Images/aeraport.svg";
import sklads from "../Images/sklad.svg";
import domas from "../Images/doma.svg";
import { Image } from "antd";
const Rasm = () => {
  return (
    <>
      <h1
        className="text-center font-noto-sans-georgian mt-20"
        style={{ fontSize: 34, fontWeight: 700 }}>
        Наши двери применяют
      </h1>
      <div className=" flex justify-center mt-10 gap-4 ">
        <Image src={meditsinas} alt="Meditsina" />
        <Image src={maktabs} alt="Maktab" />
        <Image src={sports} alt="Sport" />
      </div>

      <div className=" flex justify-center mt-4 gap-4">
        <Image src={xostels} alt="Medits" />
        <Image src={ofiss} alt="Meditsina" />
        <Image src={restorans} alt="Meditsina" />
      </div>

      <div className=" flex justify-center mt-4 gap-4">
        <Image src={aeraports} alt="Meditsina" />
        <Image src={sklads} alt="Meditsina" />
        <Image src={domas} alt="Meditsina" />
      </div>
    </>
  );
};

export default Rasm;
