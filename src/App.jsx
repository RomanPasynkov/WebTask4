import React from "react";
import {Layout, ConfigProvider} from "antd";
import HeaderBar from "./components/HeaderBar";
import LinksSection from "./components/LinksSection";
import TableSection from "./components/TableSection";
import FormSection from "./components/FormSection";
import FooterBar from "./components/FooterBar";
import "antd/dist/reset.css";

const {Content} = Layout;

export default function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#004080",
                    borderRadius: 10,
                    fontFamily: "Arial, sans-serif",
                },
            }}
        >
            <style>{`
  * { box-sizing: border-box; }
  html, body, #root { margin: 0; padding: 0; background: #f7f7f7; overflow-x: hidden; }

  .content {
    max-width: 850px;
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }

  section {
    background: white;
    margin: 20px 0;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0,0,0,0.1);
  }

  /* порядок для десктопа — сначала ссылки, потом таблица, потом форма */
  #links { order: 0; }
  #table { order: 1; }
  #form { order: 2; }

  @media (max-width: 768px) {
    .content { width: 95%; padding: 10px 0; }

    section { padding: 15px; margin: 10px 0; }

    /* порядок для мобильных — сначала таблица, потом ссылки, потом форма */
    #table { order: -1; }
    #links { order: 0; }
    #form { order: 1; }
  }
`}</style>


            <Layout>
                <HeaderBar/>
                <Content>
                    <main className="content">
                        <TableSection/>
                        <LinksSection/>
                        <FormSection/>
                    </main>
                </Content>
                <FooterBar/>
            </Layout>
        </ConfigProvider>
    );
}
