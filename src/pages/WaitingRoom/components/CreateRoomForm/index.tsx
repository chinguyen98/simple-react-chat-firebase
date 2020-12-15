import React, { FC } from 'react';
import { Form, Input, Modal } from 'antd';
import ICreateRoomForm from '../../create-room-form.interface';

interface IProps {
  visible: boolean;
  onCreate: (values: ICreateRoomForm) => void;
  onCancel: () => void;
}

const CreateRoomForm: FC<IProps> = ({ visible, onCancel, onCreate }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tạo phòng mới"
      cancelText="Bỏ"
      okText="Tạo"
      onCancel={onCancel}
      onOk={async () => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values as ICreateRoomForm)
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="create-room-form"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item>
          <Form.Item
            rules={[
              { required: true, message: 'Nhập tên phòng giúp em!' },
            ]}
            label="Tên phòng"
            name="displayName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: 'Nhập pass giúp em!' },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Nhập lại pass giúp em!' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Xác nhận pass không đúng!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateRoomForm;