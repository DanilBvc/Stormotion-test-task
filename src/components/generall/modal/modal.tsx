import React, { FC } from 'react';
import './modal.scss';
import { close } from '../../../assets/icons';
import { modalProps } from './modal.type';

const Modal: FC<modalProps> = ({
  closeModal,
  closeButton = true,
  open,
  additionalClass,
  children,
}) => {
  return (
    <>
      {open ? (
        <>
          <div onClick={closeModal} className={'dark-bg'}></div>
          <div className="modal-wrapper">
            <div className={`modal ${open ? 'modal-animate-in' : 'modal-animate-out'}`}>
              {closeButton && (
                <div className="modal-header">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      closeModal();
                    }}
                    className="close-animate"
                  >
                    {close}
                  </span>
                </div>
              )}
              <div className={`modal-container ${additionalClass}`}>{children}</div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
