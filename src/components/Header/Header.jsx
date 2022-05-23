
function Header() {
  return (
    <header>
       <div className="flex justify-center pt-6 pb-6">
        <div className='container flex justify-between'>
        <span className="font-bold text-fuchsia-600 cursor-pointer"><span className="text-purple-800">Marcin</span> Woźniak</span>
        <div className="menu">
            <ul className="flex gap-24 text-fuchsia-600 font-bold cursor-pointer">
              <li>Blog</li>
              <li>About me</li>
              <li>Projects</li>
              <li>Reach me out</li>
            </ul>
          </div>
      </div>
    </div>
    </header>
  )
}

export default Header