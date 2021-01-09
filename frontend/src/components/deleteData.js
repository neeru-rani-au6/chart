import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { deleteData } from "../redux/action/data";

const DeleteData = ({ showDeleteModal, setShowDeleteModal, id }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(deleteData(id));
    setShowDeleteModal(false);
  };
  return (
    <div>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Body>Are you sure want to Delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" onClick={clickHandler}>
            Yes
          </Button>
          <Button variant="outlined" onClick={() => setShowDeleteModal(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteData;
