
import foootermaster from './footermaster.css'

export default function Footer() {
    return (
        <footer className="row px-0 mx-0 justify-content-center " id="footerBg">
            <FooterHeader />
            <FContant />
        </footer>
    )
}


function FooterHeader() {

    return (
        <section className="F-herder row px-0 mx-0 justify-content-center justify-content-lg-end">
            <div className="col-10  pt-4">
                <section className="row  px-4 pt-4">
                    <div className='col-11 col-lg-9'> <p>I Want To Hear From You Please <span>Contact Me!</span></p> </div>
                    <ul className='col-11 col-lg-3 '>
                        <div className=' row justify-content-end align-items-center'>
                            <li className='flex-grow-1 col-1'>
                                <a href="#"><i class="bi bi-facebook"></i></a>
                            </li>
                            <li className='flex-grow-1 col-1'>
                                <a href="#"><i class="bi bi-twitter"></i></a>
                            </li>
                            <li className='flex-grow-1 col-1'>
                                <a href="#"><i class="bi bi-instagram"></i></a>
                            </li>
                            <li className='flex-grow-1 col-1'>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </li>
                        </div>
                    </ul>
                </section>

            </div>
        </section>

    )
}


function FContant() {
    return (

        <section className='row  justify-content-center justify-content-lg-end' >
            <div className='col-10 py-5'>
                <section className='row justify-content-center mt-4'>
                    <div className='col-11 col-lg-5  mt-4'>
                        <form className='row'>
                            <div className='col-10 col-lg-6 row mt-3'>
                                <label className='col-11' htmlFor="">Full Name:</label>
                                <input className='col-11' type="text" placeholder='Your name'/>

                            </div>
                            <div className='col-10 col-lg-6 row mt-3'>
                                <label className='col-11' htmlFor="">Subject:</label>
                                <input className='col-11' type="text" placeholder='Your Subject'/>

                            </div>
                            <div className='col-10 col-lg-6 row mt-3'>
                                <label className='col-11' htmlFor="">Your Email:</label>
                                <input className='col-11' type="text"  placeholder="Enter Email"/>

                            </div>
                            <div className='col-10 col-lg-6 row mt-3'>
                                <label className='col-11' htmlFor="">Phone Number:</label>
                                <input className='col-11' type="text" placeholder=' 78 0000 0000'/>

                            </div>
                            <div className='col-12 row mt-3'>
                                <label className='col-12' htmlFor="">Message:</label>
                                <textarea className='col-11 mt-1'></textarea>

                            </div>

                            <a href="" className='mt-4'>
                                Submit New<i class="bi bi-caret-right-fill ms-4"></i>
                            </a>

                        </form>
                    </div>
                    <div className='col-11 col-lg-5  mt-4 conatct' >

                        <div className='row justify-content-center align-items-center mt-4 ps-4'>
                            <h4 className='mt-3 col-10'>18/2, Topkhana Road, <span>Afghanistan</span></h4>
                            <span className='col-10 mt-4  d-flex align-items-center'>
                                <i class="bi bi-whatsapp"></i>
                                <p className='ms-3'>Contact me</p>
                            </span>
                            <span className='col-10 mt-2  d-flex align-items-center'>

                                <i class="bi bi-envelope"></i>
                                <p className='ms-3'>   akbarm.web@gmail.com</p>
                            </span>

                        </div>
                        <div className='row ps-5 mt-5'>
                            <span className='ms-3  col-12'>
                                Design By <span>Itemstore.</span>
                            </span>
                            <span className='ms-3 row col-12'>&copy; 2023 by mer’s. All rights reserved.</span>
                        </div>



                    </div>
                </section>
            </div>
        </section>
    )
}