import Img from './../../img/img01.png'


export default function Header(){
    return(
        <header className=" row d-lg-none">
                 
                <Menu />
                <HeaderMenu />
        </header>
    )
}

/*   <i class="bi bi-list fs-1 ps-3 pt-2"></i> */


function HeaderMenu(){
      return(
        <figure className="col-6  row justify-content-end px-3">
        <img className='w-50' src={Img} alt="" />
     </figure>
      )
}




function Menu(){
  return(

    <section className='col-6 row  justify-content-end'>
          <i class="bi bi-list fs-1 ps-3 pt-2"></i> 
    </section>
  )
}

