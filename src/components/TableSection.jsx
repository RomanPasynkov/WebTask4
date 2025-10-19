import React from "react";
import { Typography, Card } from "antd";

const { Title } = Typography;

export default function TableSection() {
    return (
        <section id="table">
            <Title level={2}>Таблица данных</Title>
            <Card bodyStyle={{ padding: 0 }} bordered={false}>
                <div style={{ overflowX: "auto" }}>
                    <table>
                        <thead>
                        <tr>
                            <th rowSpan={2}>№</th>
                            <th colSpan={2}>Заголовок объединённого блока</th>
                            <th rowSpan={2}>Объединённая колонка</th>
                        </tr>
                        <tr>
                            <th>Колонка 1</th>
                            <th>Колонка 2</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                {i === 0 ? (
                                    <>
                                        <td colSpan={2}>Объединённая ячейка</td>
                                        <td>Ячейка</td>
                                    </>
                                ) : (
                                    <>
                                        <td>Ячейка</td>
                                        <td>Ячейка</td>
                                        <td>Ячейка</td>
                                    </>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <style>{`
        table { width: 100%; border-collapse: collapse; font-size: 0.9em; }
        th, td { border: 1px solid #999; padding: 6px; text-align: center; }
        thead { background: #d0d0ff; }
        tbody tr:nth-child(even) { background: #f0f0f0; }
      `}</style>
        </section>
    );
}
