import meditsinas from "../Images/meditsina.svg";
import maktabs from "../Images/maktab.svg";
import sports from "../Images/sport.svg";
import xostels from "../Images/xostel.svg";
import ofiss from "../Images/ofis.svg";
import restorans from "../Images/restoran.svg";
import aeraports from "../Images/aeraport.svg";
import sklads from "../Images/sklad.svg";
import domas from "../Images/doma.svg";
const Rasm = () => {
  return (
    <>
      <div className=" flex justify-center mt-10 gap-4">
        <img src={meditsinas} alt="Meditsina" />
        <img src={maktabs} alt="Maktab" />
        <img src={sports} alt="Sport" />
      </div>

      <div className=" flex justify-center mt-4 gap-4">
        <img src={xostels} alt="Medits" />
        <img src={ofiss} alt="Meditsina" />
        <img src={restorans} alt="Meditsina" />
      </div>

      <div className=" flex justify-center mt-4 gap-4">
        <img src={aeraports} alt="Meditsina" />
        <img src={sklads} alt="Meditsina" />
        <img src={domas} alt="Meditsina" />
      </div>
    </>
  );
};

export default Rasm;
