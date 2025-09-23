import logo from './logo.png'

import style from './logo.module.scss';

function Logo () {
    return(
        <div>
                <img className={style.logoImg} src={logo} alt='Fototapete logo' />
        </div>
    ) 
}

export default Logo