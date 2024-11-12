import React, { useState } from 'react';
import { Button } from '@enact/moonstone/Button';
import { Popup } from '@enact/moonstone/Popup';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={openPopup}>Open Modal</Button>
      
      <Popup
        open={isOpen}           // 팝업 열림 상태
        onClose={closePopup}     // 닫기 이벤트 핸들러
        position="center"        // 팝업 위치 지정 (center가 기본)
        spotlightRestrict="self" // 포커스 제한 옵션
      >
        <span>This is a modal content.</span>
        <Button onClick={closePopup}>Close</Button>
      </Popup>
    </div>
  );
};

export default Modal;
