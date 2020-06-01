import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const ModalSurvey = (props) => {

    const [modal, setModal] = useState(false);
    const [rating, setRating] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");



    const toggleModal = () => setModal(!modal);

    const formSubmit = () => {
        const submission = [rating, name, email];
        //idk, probs some axios junk in here
        console.log(submission);
        toggleModal();
    }

    return (
        <div>
          <Button color="warning" onClick={toggleModal}>Submission Form</Button>
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Take our Quick Survey!</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>How much have you been enjoying the site so far?</Label>
                        <Input type="select" defaultValue={rating} onChange={(event) => setRating(event.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Input>
                        <br />
                        <Label>Personal Info</Label>
                        <Input type="email" name="text" placeholder="Name (ex: John Smith)"  onChange={(event) => setName(event.target.value)}/>
                        <Input type="email" name="email" placeholder="Email Address (ex: example@yahoo.com)" onChange={(event) => setEmail(event.target.value)} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
              <Button onClick={formSubmit}>Submit</Button>{' '}
              <Button onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
}

export default ModalSurvey;