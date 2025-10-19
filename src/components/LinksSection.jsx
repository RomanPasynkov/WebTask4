import React from "react";
import { Typography } from "antd";

import image from "../assets/image.jpg";

const { Title, Link: AntLink } = Typography;

export default function LinksSection() {
    return (
        <section id="links">
            <Title level={2}>Список ссылок</Title>
            <ul>
                <li><AntLink href="http://kubsu.ru/">Абсолютная (http)</AntLink></li>
                <li><AntLink href="https://kubsu.ru/">Абсолютная (https)</AntLink></li>
                <li>
                    <a href="https://kubsu.ru/">
                        <img src={image} alt="Ссылка-изображение" width={200} height={150} />
                    </a>
                </li>
                <li><AntLink href="/about/">Сокращённая на внутреннюю</AntLink></li>
                <li><AntLink href="/">Сокращённая на главную</AntLink></li>
                <li><AntLink href="#fragment">На фрагмент страницы</AntLink></li>
                <li><AntLink href="https://example.com/page?x=1&y=2&z=3">С параметрами</AntLink></li>
                <li><AntLink href="https://example.com/item?id=123">С id</AntLink></li>
                <li><AntLink href="./page.html">Относительная (текущий каталог)</AntLink></li>
                <li><AntLink href="about/page.html">Относительная (каталог about)</AntLink></li>
                <li><AntLink href="../page.html">Относительная (уровнем выше)</AntLink></li>
                <li><AntLink href="../../page.html">Относительная (двумя уровнями выше)</AntLink></li>
                <li>Это <AntLink href="https://kubsu.ru/">контекстная ссылка</AntLink></li>
                <li><AntLink href="https://example.com/page#section1">На фрагмент стороннего сайта</AntLink></li>
                <li>
                    <img src={image} alt="Пример карты" width={200} height={150} useMap="#map1" />
                    <map name="map1">
                        <area shape="rect" coords="0,0,100,150" href="https://kubsu.ru/" alt="Прямоугольная область" />
                        <area shape="circle" coords="200,75,50" href="https://example.com" alt="Круглая область" />
                    </map>
                </li>
                <li><AntLink href="">Пустой href</AntLink></li>
                <li><a>Без href</a></li>
                <li><AntLink href="https://example.com/" rel="nofollow">nofollow</AntLink></li>
                <li>
                    <ol>
                        <li><AntLink href="https://example.com" title="Первая">Первая</AntLink></li>
                        <li><AntLink href="https://kubsu.ru" title="Вторая">Вторая</AntLink></li>
                        <li><AntLink href="https://google.com" title="Третья">Третья</AntLink></li>
                    </ol>
                </li>
                <li><AntLink href="ftp://user:password@example.com/myfile.zip">FTP-ссылка</AntLink></li>
            </ul>
        </section>
    );
}
