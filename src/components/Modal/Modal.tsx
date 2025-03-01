import React, { FC, PropsWithChildren } from 'react';
import './Modal.css';
import { motion } from 'framer-motion';

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children, onClose, isOpen }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      variants={modalVariants}
      animate={isOpen ? 'visible' : 'hidden'}
      initial="hidden"
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        animate={isOpen ? 'visible' : 'hidden'}
        initial="hidden"
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;

