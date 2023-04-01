import { MyButton } from "../MyComponents";
import {Label, Container, Row, Col} from 'reactstrap';

export default function PageThree({count, setCount, page}) {
    if (page !== 3) {
        return null;
    }
    return (
        <Container fluid id="page-default">
            <Row>
                <Col>
                    <Label>Minus page</Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MyButton label={count} onClickFunc={() => setCount(count - 1)}/>
                </Col>
            </Row>
        </Container>
    );
}