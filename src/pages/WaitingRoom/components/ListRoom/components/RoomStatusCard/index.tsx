import React, { FC } from 'react';
import { Col } from 'antd';

interface IProps {
  id: string,
  displayName: string,
}

const RoomStatusCard: FC<IProps> = ({ id, displayName }: IProps) => {
  return (
    <>
      <Col
        key={id}
        xl={{ span: 6 }}
        className="bg-white d-flex justify-content-center align-items-center"
      >
        <span style={{ fontSize: '1.2em' }}><b>{displayName}</b></span>
      </Col>
    </>
  )
}

export default RoomStatusCard;