import React, { FC } from 'react';
import { Row } from 'antd';
import IRoom from '../../../../dtos/room.dto';
import RoomStatusCard from './components/RoomStatusCard';

interface IProps {
  rooms: IRoom[],
}

const ListRoom: FC<IProps> = ({ rooms }: IProps) => {
  return (
    <div className="mt-3">
      {
        rooms
          ? (
            <>
              <h1>Hế lu. Chọn lấy 1 phòng và bắt đầu chat!</h1>
              <Row className="mt-3">
                {
                  rooms.map(({ id, ownerId, isLocked, displayName }) => (
                    <RoomStatusCard
                      displayName={displayName}
                      id={id}
                    />
                  ))
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