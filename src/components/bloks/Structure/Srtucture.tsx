import style from './srtucture.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import sert1 from '../../../assets/sertificate1.png'
import sert2 from '../../../assets/sertificate2.png'
import sert3 from '../../../assets/sertificate3.jpg'
import sert4 from '../../../assets/sertificate4.jpg'
import sert5 from '../../../assets/sertificate5.jpg'
import sert6 from '../../../assets/sertificate6.jpg'

function Structure () {

    const SERTIFICATES = [
        {
            id: 0,
            image: sert1,
            title: 'Лучшее региональное отделение ООО "Союз Пенсионеров России" ',
            description: '3 место'
        },
        {
            id: 1,
            image: sert2,
            title: 'Лучшее региональное отделение ООО "Союз Пенсионеров России" ',
            description: '3 место'
        },
        {
            id: 2,
            image: sert3,
            title: 'Лучшее региональное отделение ООО "Союз Пенсионеров России" ',
            description: '2 место'
        },
        {
            id: 3,
            image: sert4,
            title: 'Лучшее региональное отделение ООО "Союз Пенсионеров России" ',
            description: '3 место'
        },
                {
            id: 4,
            image: sert5,
            title: 'За большой вклад и активную работу по реализации социально значимого проекта для старшего поколения "Университет третьего возраста"',
            description: ''
        },        {
            id: 5,
            image: sert6,
            title: 'Командный зачёт 13-го Всероссийского чемпионата по компьютерному многоборью среди пенсионеров',
            description: '3 место'
        },
    ]

return (
    <div  className={style.structure}>
        <h1 className={style.title}>Организационная структура</h1>
        <article className={style.article}>
            <p className={style.text}>Высший руководящий орган - Конференция, созывается раз в 4 года, выбирает членов Правления сроком на 4 года. В период между Конференциями руководит Правление. В Правление входит Председатель, заместители Председателя и др. </p>
            <p className={style.text}>Очередная отчетно-выборная Конференция прошла в ноябре 2024 г. </p>
            <p className={style.text}>У организации есть местные отделения - МО (городские, районные, поселковые). Высший руководящий орган МО - Собрание, созывается раз в 4 года, выбирает членов Совета МО сроком на 4 года. В период между Собраниями руководит Совет МО. </p>
            <p className={style.text}>Действует 36 местных отделений в 39 муниципальных образованиях. В их числе - Кировское региональное отделение, которое включает 36 муниципальных отделений.</p>
            <p className={style.text}> С  2017 г. организация входит в тройку лидеров конкурса СПР на лучшее региональное отделение в ПФО. Председатель  Колесникова О.С. участвует в качестве эксперта в общественных советах, совещаниях, обсуждениях</p>
        </article>
        <div className={style.sliderContainer}>
            <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        className={style.mySwiper}
                    >
                    {SERTIFICATES.map((slide) => (
                        <SwiperSlide key={slide.id} className={style.slide}>
                            <div className={style.slideContent}>
                            <img 
                                src={slide.image} 
                                alt={slide.title}
                                className={style.slideImage}
                            />
                            <div className={style.slideText}>
                                <h3 className={style.slideTitle}>{slide.title}</h3>
                            </div>
                            </div>
                        </SwiperSlide>
                        ))}
            </Swiper>
        </div>
    </div>
    )
}

export default Structure