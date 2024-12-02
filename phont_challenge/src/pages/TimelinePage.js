import "./TimelinePage.css"

import { TimelineComponent } from "./elements/TimelineComponent"
import { NavComponent} from "./NavComponent"
import { InputComponent } from "./InputComponent";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const TimelinePage = () => {


    return (
        <>
            <Container>
                <Row>
                    <Col><NavComponent/></Col>
                    <Col ><InputComponent/></Col>
                    <Col xs={6}><TimelineComponent /></Col>
                </Row>
            </Container>
            {/* <div className="page">
                

            </div> */}

        </>
    )
}
