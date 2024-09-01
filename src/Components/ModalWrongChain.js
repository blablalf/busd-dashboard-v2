import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { switchChain, getChainId } from "../Model/ClientsAdapter.js";

ReactModal.setAppElement('#root');

const ModalWrongChain = ({ isOpen, onClose }) => {

    const [chainId, setChainId] = useState(null);

    useEffect(() => {
        if (isOpen) {
            const fetchChainId = async () => {
                const id = await getChainId();
                setChainId(id);
            };
            fetchChainId();
        }
    }, [isOpen]);

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
                <button onClick={switchChain}>Change to Sepolia network</button>
            </ReactModal>
    );
};

export default ModalWrongChain;
