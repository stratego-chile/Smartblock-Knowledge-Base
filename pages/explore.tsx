import PageWrapper from '@components/page-wrapper';
import { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Explore: FC<Record<string, never>> = () => {
  return (
    <PageWrapper pageTitle='Explore'>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1>Explore</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>New Articles</h3>
          </Col>
          <Col>
            <h3>Tutorials</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Other Topics</h3>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default Explore;
