import PageWrapper from '@components/page-wrapper';
import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NotFoundPage: FC<Record<string, never>> = () => {
  return (
    <PageWrapper pageTitle='Resource not found'>
      <Container className='h-100'>
        <Row className='h-100 align-content-center'>
          <Col className='text-center'>
            <h1>404</h1>
            <h2>Resource not found</h2>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default NotFoundPage;
