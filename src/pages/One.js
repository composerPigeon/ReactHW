import { useState, useRef } from "react";
import { MyButton } from "../MyComponents";
import { Label, Input, Container, Row, Col } from "reactstrap";

export default function PageOne({page}) {

    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    if (page !== 1) {
        return null;
    }

    return (
        <Container fluid id="page-default">
            <Row>
                <Col>
                    <Input
                        ref={inputRef}
                        type="text"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col className=".text-center">
                    <Label>Content: {message}</Label>
                </Col>
            </Row>
            <Row>
                <Col className=".text-center">
                    <MyButton label="Erase" onClickFunc={() => setMessage('')}/>
                </Col>
            </Row>   
        </Container>
    );
}