import React from "react";
import { Layout } from "antd";

import logo from "../assets/logo.png";

const { Header } = Layout;

export default function HeaderBar() {
    return (
        <Header className="header">
            <style>{`
        header.ant-layout-header { background-color: #004080; padding: 10px 20px; height: auto; line-height: normal; }
        .header-container { display: flex; align-items: center; justify-content: space-between; }
        .logo-title { display: flex; align-items: center; }
        .logo { width: 100px; height: 100px; margin-right: 15px; }
        .site-title { font-size: 1.8em; font-weight: bold; margin: 0; color: #fff; }
        .menu ul { list-style: none; margin: 0; padding: 0; display: flex; }
        .menu li { margin-left: 20px; }
        .menu a { color: white; text-decoration: none; font-weight: bold; }
        .menu a:hover { text-decoration: underline; }

        @media (max-width: 768px) {
          .header-container { flex-direction: column; align-items: center; text-align: center; }
          .logo-title { flex-direction: column; }
          .logo { margin-right: 0; margin-bottom: 5px; width: 80px; height: 80px; }
          .menu ul { flex-direction: column; }
          .menu li { margin: 8px 0; }
        }
      `}</style>

            <div className="header-container">
                <div className="logo-title">
                    <img src={logo} alt="Логотип" className="logo" />
                    <h1 className="site-title">Задание 3</h1>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#links">Ссылки</a></li>
                        <li><a href="#form">Форма</a></li>
                        <li><a href="#table">Таблица</a></li>
                    </ul>
                </nav>
            </div>
        </Header>
    );
}
