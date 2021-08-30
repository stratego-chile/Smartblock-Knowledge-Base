import PageWrapper from "@components/page-wrapper";
import { FC } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const InternalServerErrorPage: FC<Record<string, never>> = () => {
  return (
    <PageWrapper pageTitle='Internal Server Error'>
      <Container className='h-100'>
        <Row className='h-100 align-content-center'>
          <Col className='text-center'>
            <h1>500</h1>
            <h2>Oops, we are sorry to say you an unexpected error ocurred in our side</h2>
            <h5>Please do not worry to contact us for any question</h5>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default InternalServerErrorPage;
