export function About(){

    return(
        <>
        
        <section className="py-20 bg-[#1abc9c]">
            <div className="container m-auto">
            <div className="content text-center my-4">
                <h2 className="text-7xl py-5 font-bold font-custom text-white">About</h2>
            </div>

            <div className="paragraph  flex flex-col lg:flex-row justify-center w-4/5 text-white lg:w-3/6 m-auto gap-4">
                <div className="p1 text-2xl font-light">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="p2 text-2xl font-light">
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
            </div>
            
        </section> 
        </>
    )
}