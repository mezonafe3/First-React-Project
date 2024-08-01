export function Footer(){
    return(

        <>
        <footer className=" lg:py-8 bg-[#2c3e50] ">
            <div className="container m-auto flex gap-14 flex-col justify-center py-16 lg:flex-row lg:gap-0 lg:px-16">
            <div className="content lg:w-1/3 text-center">
                <h2 className="text-2xl font-bold text-white">LOCATION</h2>
                <p className="text-white  mt-3">2215 John Daniel Drive<br/>
                Clark, MO 65243</p>
            </div>
            <div className="content  lg:w-1/3 text-center">
                <h2 className="text-2xl font-bold text-white">AROUND THE WEB</h2>
                <div className="list flex justify-center ">
                    <ul className="flex ">
                        <li class="mx-2 flex justify-center items-center mt-5 "><a href="#"><i class="p-3 border border-2 text-white hover:bg-white hover:text-black transition delay-150 rounded-full fa-brands  fa-facebook-f"></i></a></li>
                        <li class="mx-2 flex justify-center items-center mt-5 "><a href="#"><i class="p-3 border border-2 text-white hover:bg-white hover:text-black transition delay-150 rounded-full fa-brands  fa-twitter"></i></a></li>
                        <li class="mx-2 flex justify-center items-center mt-5 "><a href="#"><i class="p-3 border border-2 text-white hover:bg-white hover:text-black transition delay-150 rounded-full fa-brands  fa-linkedin-in"></i></a></li>
                        <li class="mx-2 flex justify-center items-center mt-5 "><a href="#"><i class="p-3 border border-2 text-white hover:bg-white hover:text-black transition delay-150 rounded-full fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="content  lg:w-1/3 text-center">
                <h2 className="text-2xl font-bold text-white">ABOUT FREELANCER</h2>
                <p className="text-white font-bold mt-3">Freelance is a free to use, MIT licensed<br/> Bootstrap theme created by Hamza Nouh</p>
            </div>
            </div>
            
        </footer>
        <div className="copy py-4 text-white bg-slate-900 text-center ">
                <p>CopyRight @ by Mazen Ahmed 2024</p>
            </div>
        
        </>
    )
}