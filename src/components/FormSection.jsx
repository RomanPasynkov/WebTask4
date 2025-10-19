import React from "react";
import { Typography, Form, Input, Radio, Select, DatePicker, Checkbox, Button } from "antd";

const { Title, Paragraph } = Typography;

export default function FormSection() {
    const [form] = Form.useForm();

    return (
        <section id="form">
            <Title level={2}>Форма</Title>
            <Form
                form={form}
                layout="vertical"
                onFinish={(values) => alert("Данные формы:\\n" + JSON.stringify(values, null, 2))}
            >
                <Form.Item label="ФИО" name="fio" rules={[{ required: true, message: "Введите ФИО" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Телефон" name="phone" rules={[{ required: true, message: "Введите телефон" }]}>
                    <Input type="tel" />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Введите корректный email" }]}>
                    <Input type="email" />
                </Form.Item>
                <Form.Item label="Дата рождения" name="birthdate" rules={[{ required: true, message: "Укажите дату" }]}>
                    <DatePicker style={{ width: "100%" }} />
                </Form.Item>

                <Paragraph>Пол:</Paragraph>
                <Form.Item name="gender" rules={[{ required: true, message: "Выберите пол" }]}>
                    <Radio.Group>
                        <Radio value="male">Мужской</Radio>
                        <Radio value="female">Женский</Radio>
                    </Radio.Group>
                </Form.Item>

                <Paragraph>Любимый язык программирования:</Paragraph>
                <Form.Item name="languages" rules={[{ required: true, message: "Выберите язык(и)" }]}>
                    <Select
                        mode="multiple"
                        options={[
                            { value: "Python", label: "Python" },
                            { value: "JavaScript", label: "JavaScript" },
                            { value: "C++", label: "C++" },
                            { value: "Java", label: "Java" },
                            { value: "PHP", label: "PHP" },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="Биография" name="bio" rules={[{ required: true, message: "Расскажите о себе" }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    name="agree"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, v) =>
                                v ? Promise.resolve() : Promise.reject("Требуется согласие"),
                        },
                    ]}
                >
                    <Checkbox>С контрактом ознакомлен(а)</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
}
