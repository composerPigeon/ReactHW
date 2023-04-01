import { MyButton } from "../MyComponents";
import { Label, Input, Container, Row, Col } from "reactstrap";

export default function PageTwo({count, setCount, page}) {
    if (page !== 2) {
        return null;
    }
    return (
        <Container fluid id="page-default">
            <Row>
                <Col>
                    <Label>Plus page</Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MyButton label={count} onClickFunc={() => setCount(count + 1)}/>
                </Col>
            </Row>
        </Container>

    );
}