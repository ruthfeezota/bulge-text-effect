import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import DigitalClock from "./DigitalClock";

function TimeForm() {

    const [starttime, setStarttime] = useState("");
    const [endtime, setEndtime] = useState("");
    const [straintype, setStraintype] = useState("");
    const [strainname, setStrainname] = useState("");
    const [thc, setThc] = useState("");
    const [cbd, setCbd] = useState("");
    const [moodrating, setMoodrating] = useState("");
    const [bodyeffects, setBodyeffects] = useState("");
    const [mentaleffects, setMentaleffects] = useState("");
    const [consumptionmethod, setConsumptionmethod] = useState("");
    const [quantityused, setQuantityused] = useState("");
    const [setsetting, setSetsetting] = useState("");
    const [foodintake, setFoodintake] = useState("");
    const [notes, setNotes] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted!"); // Debugging
    
        try {
          await addDoc(collection(db, "contactus"), {
            starttime,
            endtime,
            straintype,
            strainname,
            thc,
            cbd, 
            moodrating, 
            bodyeffects,
            mentaleffects,
            consumptionmethod, 
            quantityused, 
            setsetting,
            foodintake,
            notes,
            
            timestamp: new Date(),
          });
    
          alert("Your update has been submitted 👍");
          setStarttime("");
          setEndtime("");
          setStraintype("");
          setStrainname("");
          setThc("");
          setCbd("");
          setMoodrating("");
          setBodyeffects("");
          setMentaleffects("");
          setConsumptionmethod("");
          setQuantityused("");
          setSetsetting("");
          setFoodintake("");
          setNotes("");
          
        } catch (error) {
          console.error("Error submitting form:", error);
          alert(`Error: ${error.message}`);
        }
      };

  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto ">
    <div className="flex items-center justify-center">
    <DigitalClock/>
    </div>
    {/* <div className="flex items-center justify-center">
        <h1 className="text-6xl mb-12">Submit High Time</h1>
    </div> */}
            <form className="flex flex-wrap -m-2 mt-20" onSubmit={handleSubmit}>   




              <div className="p-2 w-1/2">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-white  font-robert-regular"
                >
                Strain Type
                </label>
                <input
                  type="text"
                  id="straintype"
                  name="straintype"
                  value={straintype}
                  onChange={(e) => setStraintype(e.target.value)}
                  placeholder="Dropdown with options like Sativa, Indica, Hybrid"
                  className="w-full border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>





              <div className="p-2 w-1/2">
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-white font-robert-regular"
                >
                Strain Name
                </label>
                <input
                  type="text"
                  id="strainname"
                  name="strainname"
                  value={strainname}
                  onChange={(e) => setStrainname(e.target.value)}
                  placeholder="specific strain"
                  className="w-full border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
             

                
              <div className="p-2 w-1/2">
                <label
                  htmlFor="number"
                  className="leading-7 text-sm text-white  font-robert-regular"
                >
                THC Percentage
                </label>
                <input
                  type="number"
                  id="THCPercentage"
                  name="THCPercentage"
                  value={thc}
                  onChange={(e) => setThc(e.target.value)}
                  placeholder="THC Percentage %"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>





              <div className="p-2 w-1/2">
                <label
                  htmlFor="number"
                  className="leading-7 text-sm text-white font-robert-regular"
                >
                CBD Percentage
                </label>
                <input
                  type="number"
                  id="CBDPercentage"
                  name="CBDPercentage"
                  value={cbd}
                  onChange={(e) => setCbd(e.target.value)}
                  placeholder="CBD Percentage %"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>





              <div className="p-2 w-1/2">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-white  font-robert-regular"
                >
                Mood Scale
                </label>
                <input
                  type="text"
                  id="moodrating"
                  name="moodrating"
                  value={moodrating}
                  onChange={(e) => setMoodrating(e.target.value)}
                  placeholder="happy, relaxed, energized, creative"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>





              <div className="p-2 w-1/2">
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-white font-robert-regular"
                >
                Body Effects
                </label>
                <input
                  type="text"
                  id="bodyeffects"
                  name="bodyeffects"
                  value={bodyeffects}
                  onChange={(e) => setBodyeffects(e.target.value)}
                  placeholder="Checkbox or dropdown list - Relaxed, Pain relief, Euphoria,bDry mouth,"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
             

                
              <div className="p-2 w-1/2">
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-white  font-robert-regular"
                >
                Mental Effects
                </label>
                <input
                  type="text"
                  id="mentaleffects"
                  name="mentaleffects"
                  value={mentaleffects}
                  onChange={(e) => setMentaleffects(e.target.value)}
                  placeholder="checkbox - Focused, Creative, Mind clarity, Paranoia,"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>





              <div className="p-2 w-1/2">
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-white font-robert-regular"
                >
               Consumption Type
                </label>
                <input
                  type="text"
                  id="consumptionmethod"
                  name="consumptionmethod"
                  value={consumptionmethod}
                  onChange={(e) => setConsumptionmethod(e.target.value)}
                  placeholder="Smoking, Vaping, Edibles, Tinctures"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
             



              <div className="p-2 w-1/2">
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-white font-robert-regular"
                >
               Quantity Used
                </label>
                <input
                  type="text"
                  id="quantityused"
                  name="quantityused"
                  value={quantityused}
                  onChange={(e) => setQuantityused(e.target.value)}
                  placeholder="grams, milligrams of THC"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>





              <div className="p-2 w-1/2">
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-white font-robert-regular"
                >
               Set and Setting
                </label>
                <input
                  type="text"
                  id="setsetting"
                  name="setsetting"
                  value={setsetting}
                  onChange={(e) => setSetsetting(e.target.value)}
                  placeholder="Relaxing at home, Out with friends"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>






              <div className="p-2 w-1/2">
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-white font-robert-regular"
                >
               Food/Drink Intake
                </label>
                <input
                  type="text"
                  id="foodintake"
                  name="foodintake"
                  value={foodintake}
                  onChange={(e) => setFoodintake(e.target.value)}
                  placeholder="Had a snack, Drank water, Drank alcohol"
                  className="w-full  border-2 rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>


              <div className="p-2 w-full">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white font-robert-regular"
                >
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="your notes..."
                  className="w-full bg-white rounded-3xl focus:border-indigo-500 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-black"
                ></textarea>
              </div>



<div className="p-2 w-full flex items-center justify-center mb-10">
                {/* Button updated with type="submit" */}
                <button
                  type="submit"
                  className="mt-2 cursor-pointer rounded-full bg-yellow-100 px-7 py-3 font-general text-xs uppercase text-[12px] text-black"
                >
                  Start Time
                </button>
              </div>



            </form>
            </div>
  )
}

export default TimeForm