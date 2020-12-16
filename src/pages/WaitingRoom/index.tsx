import React, { FC, useContext, useState } from 'react';
import { Button, Row } from 'antd';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FirebaseContext } from '../../contexts/firebase.context';
import CreateRoomForm from './components/CreateRoomForm';
import ICreateRoomForm from './create-room-form.interface';

import './waiting-room.scss';
import ListRoom from './components/ListRoom';
import IRoom from '../../dtos/room.dto';

const WaitingRoom: FC = () => {
  const { firestore } = useContext(FirebaseContext);

  const roomsCollection = firestore.collection('rooms');
  const getAllRoomsQuery = roomsCollection.limit(6);
  const [rooms] = useCollectionData(getAllRoomsQuery, { idField: 'id' });

  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState<boolean>(false);

  const handleCreateRoom = ({ displayName, confirmPassword, password }: ICreateRoomForm) => {
    console.log({ displayName, confirmPassword, password })
  }

  return (
    <div className="waiting-room">
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <Button
          onClick={() => { setIsAddRoomModalOpen(true) }}
          className="btn-success"
          size="large" type="primary"
        >
          Tạo phòng mới
        </Button>
        <ListRoom
          rooms={rooms as IRoom[]}
        />
      </Row>
      <CreateRoomForm
        onCreate={handleCreateRoom}
        onCancel={() => { setIsAddRoomModalOpen(false) }}
        visible={isAddRoomModalOpen}
      />
    </div>
  )
}

export default WaitingRoom;

