import React, { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ModalWrongChain = ({ isOpen, onClose }) => {
    // const [modalIsOpen, setModalIsOpen] = useState(false);

    const chainId = 1; // Hardcoded for now

    // const addNetwork = () => {
    //     // todo: Add Sepolia network
    //     changeNetwork();
    // };

    // const changeNetwork = () => {
    //     // todo: Change network
    //     closeModal();
    // };

    // const closeModal = () => {
    //     setModalIsOpen(false);
    // };

    return (
        <ReactModal
                isOpen={isOpen}
                onRequestClose={onClose}
                shouldCloseOnOverlayClick={false}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '4px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                }}
            >
                <h2>Wrong Network</h2>
                <p>You are connected to the following chainId: {chainId}</p>
                {/* <button onClick={addNetwork}>Add Sepolia network</button> */}
            </ReactModal>
    );
};

export default ModalWrongChain;
