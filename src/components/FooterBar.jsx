import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function FooterBar() {
    return (
        <Footer style={{ background: "#004080", color: "white", textAlign: "center" }}>
            © Роман Пасынков, 2025
        </Footer>
    );
}
