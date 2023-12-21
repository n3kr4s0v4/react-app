import '../Header/Header.module.scss'

function Header () {
    return (
        <>
    <header className='header'>
        <nav className='header-menu'>
            <ul className='header-nav'>
            <li className='nav-item'>Главная</li>
                <li className='nav-item'>Категории</li>
            </ul>
        </nav>
    </header>
        </>
    )
}

export default Header