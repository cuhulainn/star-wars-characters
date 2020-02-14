import React from 'react';
import Modal from '@material-ui/core/Modal';

const CharModal = props => {
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={props.onClose}
        >
            <div>
                <h2>Simple React Modal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim, non pharetra est ultrices et.
                        </p>
            </div>
        </Modal>
    );
};

export default CharModal;