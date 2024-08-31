import React, { useState } from 'react';
import Modal from 'react-modal';

const Popup = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Example Modal"
                style={{
                    content: {
                        bottom: '20px',
                        right: '20px',
                        left: 'auto',
                        top: 'auto',
                        width: '300px',
                    },
                }}
            >
            <h2>Hello</h2>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default Popup;
