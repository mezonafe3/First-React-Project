import { useEffect, useState } from "react";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import { Layer } from './Layer.jsx'
import Divider from "./Divider.jsx";

export function Protofolio() {
let [headModal,setHeadModal]=useState("")
let [modalOpen,setModalOpen]=useState(false)
let [img,setImg]=useState(null)
useEffect(()=>{
  if(modalOpen){
    document.body.style.overflow='hidden'
  }else{
    document.body.style.overflow='auto'
  }
},[modalOpen])
function handleToggleModal(img){
    setModalOpen((prevstate)=>!prevstate)
    setImg(img)
}



  return (
    <div className="relative pt-10">
        {
          modalOpen && <Layer image={img} head={headModal} onClose={()=>{
            handleToggleModal(img)
          }} />
        }
      <div className="section bg-slate-100 pt-20 pb-16" id="protofolio">
        <div className="content text-center flex justify-center items-center">
          <h2 className="text-7xl font-bold text-[#2c3e50]">Protofolio</h2>
        </div>
        <Divider/>

        <div className="container mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="img1 w-4/5  m-auto pb-10">
            <div className="img-container relative  group ">
              <img src={img1} alt="" className="w-full rounded-2xl"  />
              <div className="overlayer hidden      justify-center items-center  rounded-2xl absolute top-0 left-0 right-0 bottom-0 bg-slate-400   group-hover:flex"
              onClick={()=>{
                handleToggleModal(img1)
                setHeadModal("LOG CABIN")
              }}>
                <i class="fa-solid fa-plus fa-2x text-white"></i>
              </div>
            </div>
          </div>
          <div className="img2 w-4/5  m-auto pb-10">
            <div className="img-container relative group">
              <img src={img2} alt="" className="w-full rounded-2xl" />
              <div className="overlayer hidden group-hover:flex justify-center items-center rounded-2xl absolute top-0 left-0 right-0 bottom-0 bg-slate-400 "onClick={()=>{
                handleToggleModal(img2)
                setHeadModal("TASTY CAKE")
              }}>
                <i class="fa-solid fa-plus fa-2x text-white"></i>
              </div>
            </div>
          </div>
          <div className="img3 w-4/5  m-auto pb-10">
            <div className="img-container relative group">
              <img src={img3} alt="" className="w-full rounded-2xl" />
              <div className="overlayer hidden group-hover:flex justify-center items-center rounded-2xl absolute top-0 left-0 right-0 bottom-0 bg-slate-400 "onClick={()=>{
                handleToggleModal(img3)
                setHeadModal("CIRCUS TENT")
              }}>
                <i className="fa-solid fa-plus fa-2x text-white"></i>
              </div>
            </div>
          </div>
          <div className="img4 w-4/5  m-auto pb-10">
            <div className="img-container relative group">
              <img src={img4} alt="" className="w-full rounded-2xl" />
              <div className="overlayer hidden group-hover:flex justify-center items-center rounded-2xl absolute top-0 left-0 right-0 bottom-0 bg-slate-400 "onClick={()=>{
                handleToggleModal(img4)
                setHeadModal("CONTROLER")
              }}>
                <i className="fa-solid fa-plus fa-2x text-white"></i>
              </div>
            </div>
          </div>
          <div className="img5 w-4/5  m-auto pb-10">
            <div className="img-container relative group">
              <img src={img5} alt="" className="w-full rounded-2xl" />
              <div className="overlayer hidden group-hover:flex justify-center items-center rounded-2xl absolute top-0 left-0 right-0 bottom-0 bg-slate-400 "onClick={()=>{
                handleToggleModal(img5)
                setHeadModal("LOCKED SAFE")
              }}>
                <i className="fa-solid fa-plus fa-2x text-white"></i>
              </div>
            </div>
          </div>
          <div className="img6 w-4/5  m-auto pb-10">
            <div className="img-container relative group">
              <img src={img6} alt="" className="w-full rounded-2xl" />
              <div className="overlayer hidden group-hover:flex justify-center items-center rounded-2xl absolute top-0 left-0 right-0 bottom-0 bg-slate-400 "onClick={()=>{
                handleToggleModal(img6)
                setHeadModal("SUBMARINE")
              }}>
                <i className="fa-solid fa-plus fa-2x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
