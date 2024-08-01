import x from'../assets/images/x.png'
import Divider from './Divider'
export function Main(){
    return(
        <>
            <section className=" bg-[#1abc9c] pt-12 mt-12">
                <div className="content flex justify-center items-center flex-col">
                    <div className="img  flex justify-center items-center flex-col ">
                        <div className="hero-img w-52 pb-5 pt-20">
                            <img src={x} alt="" />
                        </div>
                        <h2 className=' text-7xl font-bold font-custom text-white pb-4'>Start React</h2>
                    </div>
                    <Divider/>
                    <p className='text-2xl text-white font-semibold py-4 pb-10'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>
        </>
    )
}