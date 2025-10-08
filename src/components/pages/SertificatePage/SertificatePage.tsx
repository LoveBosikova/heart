import Feedback from "../../bloks/Feedback/Feedback";
import Sertificates from "../../bloks/Sertificates/Sertificates"
import style from './SertificatePage.module.scss';

function SertificatePage() {

return (
    <>
    <h1 className={style.title}>Наши награды и сертификаты</h1>
        <Sertificates />
        <Feedback />
    </>
    )
}

export default SertificatePage