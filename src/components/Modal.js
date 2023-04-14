import React from 'react';

function Modal() {
  return (
    <aside className="modal-container">
        <div className="modal">
            <h4>Remove all your items from your shopping cart?</h4>
            <div className="btn-container">
                <button className="btn confirm-btn" type="button">Confirm</button>
                <button className="btn clear-btn" type="button">Cancel</button>
            </div>
        </div>
      
    </aside>
  );
}

export default Modal;
