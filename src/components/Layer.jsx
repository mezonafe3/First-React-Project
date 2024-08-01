import Divider from "./Divider";

export function Layer({image,onClose,head}) {
  return (
    <div className="text-center absolute top-0 bottom-0 left-0 right-0 bg-[#44444451] overflow-scroll z-30 flex justify-center items-center" onClick={onClose} >
      
     <section className="w-1/2 p-4 relative rounded-lg bg-white flex flex-col items-center justify-center text-center">
     <i className="fa-solid fa-x absolute right-4 top-3 p-3 cursor-pointer"  onClick={onClose}></i>
          <h2 className="text-5xl font-bold pt-6">{head}</h2>
          <Divider/>
          <div className="w-4/6">
              <img src={image} alt="" className="w-full rounded-xl" />
          </div>
          <p className=" py-6 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
     </section>
    </div>
  );
}