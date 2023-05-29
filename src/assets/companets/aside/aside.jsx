
import ImgLogo from './../../img/img01.png'
import master from './master.css'

const data = ['Home', 'about', 'services', 'Portfoilo', 'news', 'contact']


export default function Aside() {

    return (
        <aside id="aside" className='col-2 d-none d-lg-flex border px-0 mx-0'>
            
            <div className='px-3'>

            <Logo />
            <Navbar />
            <AsideFooter />
            </div>
        </aside>
    )
}

 /* Log is start */
function Logo() {
    return (
        <figure className='col-12 mt-4'>
            <img  className='w-50' src={ImgLogo} alt="" />
            
        </figure>
    )
}

/* navbar is start */
function Navbar() {
    return (
        <nav className='col-12'>
            <ul className='p-3'>
                {data.map(function (val) {
                    return <li className='mt-4'><a href="3">{val}</a></li>
                })}
            </ul>
        </nav>
    )

}

/* AsideFooter is start */
function AsideFooter() {
    return (
        <div id="asidef" className='col-12 mt-5 h-100'>
             <section className='row px-2 mt-5'>
             <h3>Newsletter</h3>
            <p className='mt-4'>akbarm.web@gmail.com</p>
            <a href="#" className='mt-4'>
                &copy; by Akbar M
            </a>
             </section>
        </div>
    )

}

