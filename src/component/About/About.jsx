import React from 'react'
import './style.css'
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export const About = () => {
    return (
        <div>
            <Navbar />
            <div class="sectcompaniya">

                <h1 class="sectcompani">О компании</h1>


            </div>
            <div class="container2">
                <div class="sectcompani-text">
                    <h4>Ezy parts</h4>

                    <p>Добро пожаловать в магазин Ezy Parts! Мы специализируемся на поставке качественных гаек, деталей для автомобилей, видов бензинов и многого другого. Благодаря нашему опыту работы более 14 лет, мы готовы предложить вам широкий ассортимент продукции и профессиональную консультацию.

                        Мы уделяем особое внимание оптимизации нашей службы доставки. При заказе по межгороду, вы получите свои товары в течение трех дней. А если вам требуется доставка в пределах города, мы гарантируем доставку в течение 2 часов. <br /> <br />

                        Благодаря высокому уровню обслуживания и качественным продуктам, 90% наших клиентов становятся постоянными покупателями. Мы предоставляем гарантию на все наши товары в течение одного года, чтобы вы могли покупать с уверенностью. <br /> <br />

                        Кроме того, мы рады сообщить, что открыли собственный сервисный центр под названием EzyService. Наша команда профессионалов работает 7 дней в неделю с 10:00 до 20:00, готова оказать помощь в обслуживании и ремонте ваших устройств. <br /> <br />

                        Приходите к нам, и мы всегда поможем вам подобрать подходящие гайки, детали для автомобилей или другие необходимые компоненты. Мы стремимся обеспечить высокое качество обслуживания и удовлетворить все ваши потребности.</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
