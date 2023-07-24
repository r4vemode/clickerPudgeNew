
const ModalAchiv = ({onClose, children}) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};
export default ModalAchiv;