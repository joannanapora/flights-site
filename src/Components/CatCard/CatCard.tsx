import React, { useState } from "react";

const CarouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

const CatCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    let newSlide =
      currentSlide === CarouselData.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      currentSlide === 0 ? CarouselData.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const [dane, setDane] = useState({
    "pon": { label: "Poniedzialek", value: "" },
    "wt": { label: "Wtorek", value: ""  },
    "sr": { label: "Sroda", value: ""  },
    "czw": { label: "Czwartek", value: ""  },
    "pt": { label: "Piatek", value: ""  },
    "months": { label: "", value: "", },

  });

  const etat = 
  (Number(dane.pon.value) +   Number(dane.wt.value) + Number(dane.sr.value) +
  Number(dane.czw.value) + Number(dane.pt.value)) / 25 

  const godzinyPracy =  (Number(dane.pon.value) +   Number(dane.wt.value) + Number(dane.sr.value) +
  Number(dane.czw.value) + Number(dane.pt.value))

  const dniUrlopowe = (35/12) * Number(dane.months.value)

  const dniUrlopoweZaokraglone = Math.round(dniUrlopowe)

const wskaznik = etat || godzinyPracy === 0 ? 0: (etat * 40)/godzinyPracy

  return (
    <div className="max-w-7xl w-full flex mx-auto lg:px-8 mt-1 ">
      {/* <div className="mt-8">
        <div className="max-w-lg h-72 flex overflow-hidden relative border-4 border-white ">
          <AiOutlineLeft
            onClick={prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === currentSlide
                      ? "block w-full h-auto object-cover"
                      : "hidden"
                  }
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div> */}
      <div className="h-full w-1/3 border-2 border-white">
        <div className="text-white p-2">Wprowadz ilość godzin pracy dla każdego dnia tygodnia:</div>
      
        {Object.keys(dane).map((key) => (
        
        <div className="flex items-center justify-between">
              {
               dane[key].label === "" &&
               <p className="text-white p-2" >Wprowadz liczbe miesięcy do obliczenia urlopu:</p>
              }
            <p className="text-white p-2 ">{dane[key].label}</p>
            <div className="flex items-center">
              <input value={dane[key].value} onChange={(e) => setDane({...dane, [key]: {...dane[key], value: e.target.value}})} className="p-2 w-12 my-2"></input>{" "}
      
             {
                dane[key].label !== "" ?
               <p className="text-white p-2">h</p>
               :
               <p className="text-white p-2 mr-2"> </p>
             } 
            </div>
          </div>
        ))}
</div>
      <div className="h-full w-2/3 border-2 border-white">
      <div className="text-white flex justify-end text-xl p-4"> Godzin pracy w tygodniu: {godzinyPracy} / 25 </div>
      <div className="text-white flex justify-end text-xl p-4"> Liczba miesięcy: { dane.months.value.length > 0 ? dane.months.value : 0 } / 12</div>
        <div className="text-white flex justify-end text-xl p-4"> Etat: {etat === 0 ? "0" : etat} </div>
        <div className="text-white flex justify-end text-xl p-4"> Przyslugujacych dni urlopowych: <p className="flex  items-center text-red-500  mx-2">({(dniUrlopowe.toPrecision(4))}) ~ {dniUrlopoweZaokraglone} dni</p></div>
        <div className="text-white flex justify-end text-xl p-4"> Przyslugujacych godzin urlopowych: <p className="flex items-center text-red-500 mx-2"> {dniUrlopoweZaokraglone * 8} godzin </p>({dniUrlopoweZaokraglone}dni x 8h)</div>
        <div className="text-white flex justify-end text-xl p-4 border-t-2 border-t-white"> Odjąć od urlopu za cały tydzień: <p className="flex items-center text-red-500 mx-2"> {(etat * 40)} godz.</p></div>
        <div className="text-white flex justify-end text-xl p-4"> Odjąc urlopu za 1h: <p className="flex items-center text-red-500 mx-2"> {etat || godzinyPracy === 0 ? 0 : (etat * 40)/godzinyPracy} godz.</p> </div>
        <div className="text-white flex justify-end text-xl p-4"> 
        Poniedziałek 
        <p className="flex items-center text-red-500 mx-2"> {(wskaznik * Number(dane.pon.value)).toPrecision(2)}h</p> 
        Wtorek 
        <p className="flex items-center text-red-500 mx-2"> {(wskaznik * Number(dane.wt.value)).toPrecision(2)}h</p> 
        Środa
        <p className="flex items-center text-red-500 mx-2"> {(wskaznik * Number(dane.sr.value)).toPrecision(2)}h</p> 
        Czwartek
        <p className="flex items-center text-red-500 mx-2"> {(wskaznik * Number(dane.czw.value)).toPrecision(2)}h</p> 
        Piątek
        <p className="flex items-center text-red-500 mx-2">{(wskaznik * Number(dane.pt.value)).toPrecision(2)}h</p> 
        </div>
      </div>
    </div>
  );
};

export default CatCard;
