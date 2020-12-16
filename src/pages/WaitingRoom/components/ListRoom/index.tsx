import React, { FC } from 'react';
import { Col, Row } from 'antd';
import IRoom from '../../../../dtos/room.dto';
import Text from 'antd/lib/typography/Text';

interface IProps {
  rooms: IRoom[],
}

const ListRoom: FC<IProps> = ({ rooms }: IProps) => {
  const renderRooms = () => {
    return rooms && (
      rooms.map(({ id, ownerId, isLocked, displayName }) => (
        <Col
          key={id}
          xl={{ span: 6 }}
          className="bg-white d-flex justify-content-center align-items-center"
        >
          <Text style={{ fontSize: '1.2em' }}><b>{displayName}</b></Text>
        </Col>
      ))
    );
  }

  return (
    <div className="mt-3">
      {
        rooms?.length !== 0
          ? (
            <>
              <h1>Hế lu. Chọn lấy 1 phòng và bắt đầu chat!</h1>
              <Row className="mt-3">
                {
                  renderRooms()
                }
              </Row>
            </>
          )
          : (
            <h1>Hiện tại không có phòng nào được tạo!</h1>
          )
      }
    </div>
  )
}

export default ListRoom;