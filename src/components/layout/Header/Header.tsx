import Logo from '../../ui/Logo/Logo';
import style from './header.module.scss';

function Header () {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <Logo />
            </div>
            <hgroup className={style.headers}>
                <h1 className={style.h1}>Союз пенсионеров России</h1>
                <h2 className={style.h2}>Кировская область</h2>
            </hgroup>
        </header>
    )
}

export default Header;