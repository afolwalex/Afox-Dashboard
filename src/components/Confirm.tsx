import ModalComponent from './ModalComponent';
import {Modal} from 'react-bootstrap';

const Confirm = ({
    open,
    close,
    message,
    onProceed,
}: {
    open: boolean;
    close: () => void;
    message?: string;
    onProceed: () => void;
}) => {
    return (
        <ModalComponent open={open} close={close}>
            <p className="mb-3">
                {message || 'Are you sure you want to proceed?'}
            </p>
            <Modal.Footer>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                        close();
                        onProceed();
                    }}>
                    Yes
                </button>
                <button className="btn btn-sm btn-secondary" onClick={close}>
                    No
                </button>
            </Modal.Footer>
        </ModalComponent>
    );
};

export default Confirm;
