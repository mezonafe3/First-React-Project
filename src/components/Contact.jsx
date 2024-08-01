export function Contact(){

    return(
        <>
        
        <section className="py-20">
            <div className="container m-auto">
                <div className="content text-center my-4">
                    <h2 className="text-7xl py-5 font-bold font-custom text-[#2c3e50]">Contact Me</h2>
                </div>
            </div>
            <div className="form w-4/5 lg:w-1/2 m-auto">
                <input type="text" className="w-full border-none py-4 my-3 ps-2 placeholder:text-xl font-bold focus:outline-none " placeholder="Name" />
                <input type="text" className="w-full border-none py-4 my-3 ps-2 placeholder:text-xl font-bold focus:outline-none " placeholder="Email Adress" />
                <input type="text" className="w-full border-none py-4 my-3 ps-2 placeholder:text-xl font-bold focus:outline-none " placeholder="Phone Number" />
                <input type="text" className="w-full border-none py-4 my-3 ps-2 placeholder:text-xl font-bold focus:outline-none " placeholder="Message" />
                <button className="bg-[#1abc9c] py-4 px-8 rounded-xl text-white font-bold hover:bg-[#1abc9ca2] transition duration-150 mb-3 mt-16 ">Send</button>
            </div>

            
        </section> 
        </>
    )
}