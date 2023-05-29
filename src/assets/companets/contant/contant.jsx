import AboutIMg from './../../img/img03.jpg'
import master from './master.css'
import Skillimg from './../../img/img15.jpg'

export default function Contant() {
    return (
        <section className="col-12 px-0 mx-0 bg-primary" id="container">

            <TopContant />
            <About />
            <Skill />
        </section>
    )
}



function TopContant() {

    return (
        <section id="bg" className='row justify-content-center  mx-0 px-0  '>
         
            <div className='col-9 col-lg-7 px-3  h-100  row align-items-center'>
                <section className='col-12'>
                    <h3>Hello I'm</h3>
                    <h1 className='mt-3'>Mrs. Maya</h1>
                    <p className='mt-3'>I’m Experienced Glad to <span>see</span> you here.</p>

                    <a href="" className='mt-4'>
                        Hire Me<i class="bi bi-caret-right-fill ms-4"></i>
                    </a>
                </section>
            </div>

        </section>

    )
}

function About() {

    return (

        <section className='row justify-content-center justify-content-lg-end pt-4 about' >
            <div className="col-10  ">
                <section className='row justify-content-center'>
                    <figure className="col-12 col-lg-5 ">
                        <img className='col-12' src={AboutIMg} alt="" />
                    </figure>
                    <div id="About" className=" col-11 col-lg-5 row align-items-center px-3 ">
                        <section className='col-12'>
                            <p>THERE IS ALL</p>
                            <h2 className='mt-3'>Mrs. Maya About Me</h2>

                            <p className='mt-3'>
                                My name is Mrs. Maya and I am a Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                            </p>

                            <h4 className='mt-3'>18/2, Topkhana Road, <span>Afghanistan</span></h4>
                            <div className='row align-items-center mt-4'>
                                <span className='col-10 mt-2 col-lg-5  d-flex align-items-center'>
                                    <i class="bi bi-whatsapp"></i>
                                    <p className='ms-3'>Contact me</p>
                                </span>
                                <span className='col-10 mt-2 col-lg-7  d-flex align-items-center'>

                                    <i class="bi bi-envelope"></i>
                                    <p className='ms-3'>   akbarm.web@gmail.com</p>
                                </span>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}


/* OUR SKILL
Team Sollution Skill */

function Skill() {
    return (

        <section className='row justify-content-center justify-content-lg-end pt-5 ' >
            <div className="col-10  bt ">
                <section className='row justify-content-center'>

                    <div id="skill" className=" col-11 col-lg-5 row align-items-center px-3 ">
                        <section className='col-12'>
                            <p>OUR SKILL</p>
                            <h2 className='mt-3'>Team Sollution Skill</h2>

                            <p className='mt-3'>
                                As a web developer and web designer, you will need to have keen analytical skills to create a variety of successful websites. This involves ensuring the coding is correct so the website is functional.
                            </p>
                            <div className='col-12'>
                                <ul>
                                    <li className='mt-4'>
                                        Front end Developer
                                        <span id="span1" className='mt-2 d-flex'></span>
                                    </li>

                                    <li className='mt-4'>
                                        UI/UX Design
                                        <span id="span2" className='mt-2 d-flex'></span>
                                    </li>
                                    <li className='mt-4'>
                                        Web Design
                                        <span id="span3" className='mt-2 d-flex'></span>
                                    </li>
                                    <li className='mt-4'>
                                        SEO
                                        <span id="span4" className='mt-2 d-flex'></span>
                                    </li>
                                </ul>
                            </div>


                        </section>
                    </div>
                    <figure className="col-12 col-lg-5 ">
                        <img className='col-12' src={Skillimg} alt="" />
                    </figure>
                </section>
            </div>
        </section>
    )
}





